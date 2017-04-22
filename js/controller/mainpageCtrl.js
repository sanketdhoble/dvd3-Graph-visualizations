testApp.controller("mainpageCtrl",function($scope,fileUpload,$http,$timeout) {
      

      $scope.data=[];
      $scope.dummyArray=[];
     // $scope.values=[];

  
      $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

        $scope.GraphOptions=function(){
            var colors = ["red", "green","blue"];
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
                        //console.log(d);
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
                      showMaxMin: true,
                       
                    },
                    zoom: {
                        enabled: true,
                        scaleExtent: [1, 10],
                        useFixedDomain: false,
                        useNiceScale: false,
                        horizontalOff: false,
                        verticalOff: true,
                        unzoomEventType: 'dblclick.zoom'
                    }
                }
             };
           }

        $scope.getJsonData=function()
        {
            //fetching json data from local folder
            $http.get('data/sample_data.json')
            .then(function(data) {
               $scope.jsonData = data.data;
               for(var groupsIndex=0;groupsIndex<$scope.jsonData.groups.length;groupsIndex++)
               {
                if($scope.jsonData.groups[groupsIndex].groupId==1)//using the group whose groupId is 1
                {
                    // console.log(groupsIndex);
                    var peaksIndex=0;
                    for(peaksIndex=0;peaksIndex<$scope.jsonData.groups[groupsIndex].peaks.length;peaksIndex++)
                    {
                        //$scope.values.length = 0; //clearing values array
                        $scope.values=[];

                        //console.log($scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.intensity[2]);
                        for(var i=0;i<$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.rt.length;i++)
                        {
                            var intensity=$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.intensity[i];
                            var newer=intensity/1000000;
                            
                            $scope.values.push([$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].eic.rt[i],
                                Number(newer.toFixed(2))
                                ]);
                        }
                        $scope.dummyArray.push({
                            "key":$scope.jsonData.groups[groupsIndex].peaks[peaksIndex].sampleName,
                            "values":$scope.values  
                           });
                                             
                    }
                    
                }
               }
               $scope.data=$scope.dummyArray;
             
                $scope.GraphOptions();
            });
        }
        $scope.getJsonData();
        //$scope.GraphOptions();
        

        
});
