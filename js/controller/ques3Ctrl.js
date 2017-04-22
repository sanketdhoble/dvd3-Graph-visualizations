testApp.controller("ques3Ctrl",function($scope,fileUpload,$http,$timeout) {
      

      $scope.data=[];
      $scope.dummyArray=[];
      $scope.map={};
     // $scope.values=[];

  
      $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

        var colors = ["red", "green","blue"];
        $scope.GraphOptions=function(){
            
            $scope.options = {
                chart: {
                    type: 'lineChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 40
                    },
                    color: function(d,i){
                        return (d.data && d.data.color) || colors[i % colors.length]
                    },
                    x: function(d){return d[0];},
                    y: function(d){return d[1];},
                    useVoronoi: false,
                    clipEdge: true,
                    duration: 100,
                    useInteractiveGuideline: true,
                    xAxis: {
                        showMaxMin: false,
                       
                    },
                    yAxis: {
                      showMaxMin: false,
                       
                    },
                    zoom: {
                        enabled: true,
                        scaleExtent: [1, 20],
                        useFixedDomain: true,
                        useNiceScale: true,
                        horizontalOff: true,
                        verticalOff: true,
                        unzoomEventType: 'dblclick.zoom'
                    }
                }
             };
           }

        $scope.getJsonData=function()
        {
            $http.get('data/sample_data.json')
            .then(function(data) {
               $scope.jsonData = data.data;

                //I am checking into different groups for a particular sampleName and if that sampleName is matched I add its content to my values array.

               
               //This loop is used to iterate over all peaks of groupId=1 by default. 
                 for(var peaksIndex2=0;peaksIndex2<$scope.jsonData.groups[0].peaks.length;peaksIndex2++) 
                  {
             
                    $scope.values=[];
                    
                   //I will iterate over different groups with groupIndex iterator
                      for(var groupsIndex=0;groupsIndex<$scope.jsonData.groups.length;groupsIndex++)
                       {
              
                          
                          for(peaksIndex=0;peaksIndex<$scope.jsonData.groups[groupsIndex].peaks.length;peaksIndex++)
                         {
                            //if sample names from different groups are equal, I push the data into values array.
                              if($scope.jsonData.groups[0].peaks[peaksIndex2].sampleName==$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].sampleName)
                              {
                                for(var i=0;i<$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.rt.length;i++)
                                {
                                    var intensity=$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.intensity[i];
                                    var newer=intensity/1000000;
                                    //console.log($scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.rt[i])
                                    $scope.values.push([$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.rt[i],
                                        Number(newer.toFixed(2))  //toFixed to allow decimal upto 2 digits
                                        ]);
                                    
                                  
                                }
                                //start
                                //updated after issue with hovering
                                //sorting on basis of x axis values (rt) of all same samplenames
                                $scope.values.sort(function(a, b) {
                                        return parseFloat(a[0]) - parseFloat(b[0]);
                                    });
                                //end
                                console.log("pushing data into array ="+$scope.values.length);
                                console.log("sample from groupId= "+$scope.jsonData.groups[groupsIndex].groupId+ "  Sample Name="+ $scope.jsonData.groups[0].peaks[peaksIndex2].sampleName);
                              
                              }
                          }

                          //console.log($scope.values);
                     
                      } 
                      console.log("Length of array after pushing data from all groups with same sampleName= "+$scope.values.length)
                      console.log("All samples with same sampleName are merged together");

                 $scope.dummyArray.push({
                    "key":$scope.jsonData.groups[0].peaks[peaksIndex2].sampleName,
                    "values":$scope.values  
                   });
           
               }
               $scope.data=$scope.dummyArray;
             
                $scope.GraphOptions();
              
            });
        }
        $scope.getJsonData();
        //$scope.GraphOptions();
        

        
});
