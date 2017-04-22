## dvd3-Graph-visualizations


This is an angularjs App.
Install npm or apache server
command to start app using npm : http-server 
command to start the app using apache server: sudo service apache2 start 


Quick WAY:
open index.html file with Morzilla FireFox.


## Problem Statement

### Solve the following questions in the below mentioned order.
Data taken from file data/sample_data.json
 
2. Make visualisation of all samples of groupId = 1 ​using one of scatter/line/area​ plot

between rt ​and intensity ​key of eic ​key from json data provided(sample data format is

shown below) . In this, rt should be on X-axis and intensity should be on Y-axis.

3. make visualization of all samples of all groups using one of scatter/line/area​ plot

between rt(key in json file)​ and intensity(key in json file) ​of eic​ key from json data

provided.

a. Each sample will be repeated in all groups. So, same samples in different group

should have same color which should be shown on the legend of the plot.

(sampleName exist in the data as “sampleName” ​key). (Optional)


### Sample Data Format
```json
{
"groups": [
	{
	"groupId": 1,
		"peaks": [ 
			{
			"sampleName": "SAMPLE_#SPMJXVC_1_2",
			"eic": {"rt": [7,8,9,10],
			        "intensity":[7,2,4,3]
			        }
			},
			{
			"sampleName": "SAMPLE_#SPMJXVC_1_3",
			"eic": {"rt": [7,8,9,10],
			        "intensity":[2,9,5,6]
			      }
			},
			{
			"sampleName": "SAMPLE_#SPMJXVC_1_1",
			"eic": {"rt": [7,8,9,10],
			      "intensity":[5,6,2,1]
			       }
			}
	    ]
	},
	{
	"groupId": 2,
		"peaks": [ 
			{
			"sampleName": "SAMPLE_#SPMJXVC_1_3_",
			"eic": {"rt": [7,8,9,10],
			        "intensity":[6,3,7,4]
			        }
			},
			{
			"sampleName": "SAMPLE_#SPMJXVC_1_2_",
			"eic": {"rt": [7,8,9,10],
			        "intensity":[5,6,7,8]
			       }
			},
			{
			"sampleName": "SAMPLE_#SPMJXVC_1_1_",
			"eic": {"rt": [7,8,9,10],
			        "intensity":[5,8,7,9]
			        }
			}
		]
	}
]}

```
