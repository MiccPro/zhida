/**
 * Created by bjwsl-001 on 2017/6/15.
 */


//配置状态
app.config(
  function ($stateProvider,
            $ionicConfigProvider,
            $urlRouterProvider) {

    //调整tabs固定在底部（无论是在哪个平台）
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
        .state('schoolInformation', {//学校基本信息
            url: '/schoolInformation',
            templateUrl: 'tpl/school/schoolInformation.html',
            controller: 'schoolInformationCtrl'
        })
        .state('detail', {//学校详情
            url: '/detail',
            templateUrl: 'tpl/school/detail.html',
            controller: 'detailCtrl'
        })
        .state('schoolList', {//学校列表
            url: '/schoolList',
            templateUrl: 'tpl/school/schoolList.html',
            controller: 'schoolListCtrl'
        })
        .state('myschool', {//我的学校：学校基本信息
            url: '/myschool',
            templateUrl: 'tpl/school/myschool.html'
            //,
            //controller: 'myschoolCtrl'
        })
        .state('myStudents', {//我的学生
            url: '/myStudents',
            templateUrl: 'tpl/school/myStudents.html',
            controller: 'myStudentsCtrl'
        })
        .state('studentDetail', {//我的学生:详情
            url: '/studentDetail',
            templateUrl: 'tpl/school/studentDetail.html',
            controller: 'studentDetailCtrl'
        })
        .state('homeWork', {//消息:学生作业
            url: '/homeWork',
            templateUrl: 'tpl/school/homeWork.html',
            controller: 'homeWorkCtrl'
        })
        .state('score_1', {//学生：课程:职业核心能力训练结果
            url: '/score_1',
            templateUrl: 'tpl/school/score_1.html',
            controller: 'score_1Ctrl'
        })
        .state('score_2', {//学生：课程:职业核心能力训练结果
            url: '/score_2',
            templateUrl: 'tpl/school/score_2.html',
            controller: 'score_2Ctrl'
        })
        .state('score_3', {//学生：课程:职业核心能力训练结果
            url: '/score_3',
            templateUrl: 'tpl/school/score_3.html',
            controller: 'score_3Ctrl'
        })
  });
//创建一个子控制器：学校基本信息
app.controller('schoolInformationCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.lists={'photo':'','name':'','nature':'','scale':'','url':''};
    $scope.submit=function(){
        console.log( $scope.lists);
        $scope.$parent.jump('Main');
    }
}]);

//创建一个子控制器：学校详情
app.controller('detailCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//创建一个子控制器：学校列表
app.controller('schoolListCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

    $scope.leiXing=['综合','理工','医药','农业'];
    $scope.teSe=['211','985'];
    $scope.xueLi=['本科','高职专科','独立学院','教育部直属','其他'];
    $scope.companyLists=[
        {"image":'img/school1.jpg','name':'郑州大学','nature':'综合类','url':"www.ruc.edu.cn"},
        {"image":'img/school2.jpg','name':'郑州大学','nature':'理工类','url':"www.ruc.edu.cn"},
        {"image":'img/school3.jpg','name':'郑州大学','nature':'综合类','url':"www.ruc.edu.cn"},
        {"image":'img/school4.jpg','name':'郑州大学','nature':'综合类','url':"www.ruc.edu.cn"},
        {"image":'img/school6.jpg','name':'郑州大学','nature':'综合类','url':"www.ruc.edu.cn"}
    ];

}]);
//创建一个子控制器：我的学生
app.controller('myStudentsCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

    $scope.banji=['210','211','212','213'];
    $scope.testPhase=['职业核心能力训练','自我分析','职业体验','简历'];
    $scope.studentLists=[
        {"image":'img/avatar-edit.jpg','name':'张三','yuanxi':'艺术','zhuanye':"美术",'banji':"211"},
        {"image":'img/avatar-edit.jpg','name':'李四','yuanxi':'艺术','zhuanye':"音乐",'banji':"211"},
        {"image":'img/avatar-edit.jpg','name':'张三','yuanxi':'艺术','zhuanye':"美术",'banji':"211"},
        {"image":'img/avatar-edit.jpg','name':'李四','yuanxi':'艺术','zhuanye':"音乐",'banji':"211"},
        {"image":'img/avatar-edit.jpg','name':'张三','yuanxi':'艺术','zhuanye':"美术",'banji':"211"}
    ];


}]);
//创建一个子控制器：学生详情
app.controller('studentDetailCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//创建一个子控制器：消息：学生作业
app.controller('homeWorkCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.title=['全部','未处理','已处理'];
    $scope.studentLists=[
        {"image":'img/avatar-edit.jpg','name':'张三','banji':"美术211班",'statue':'未处理'},
        {"image":'img/avatar-edit.jpg','name':'李四','banji':"音乐211班",'statue':'未处理'},
        {"image":'img/avatar-edit.jpg','name':'张三','banji':"音乐211班",'statue':'未处理'},
        {"image":'img/avatar-edit.jpg','name':'李四','banji':"音乐211班",'statue':'已处理'},
        {"image":'img/avatar-edit.jpg','name':'张三','banji':"音乐211班",'statue':'已处理'}
    ];

    $scope.test='';
    $scope.homeWorkTabIndex=0;
    $scope.homeWorkTabChanged=function(index){
        $scope.homeWorkTabIndex = index;
        if(index==0){
            $scope.test='';
        }else{
            $scope.test=$scope.title[index];
        }
        console.log($scope.test);
    }


}]);
//创建一个子控制器：第一阶段成绩
app.controller('score_1Ctrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    var ctx=y1.getContext('2d');
    new Chart(ctx,{
        //        type:'bar',//柱状图
        type:'line',//曲线图
        data:{
            labels:['第一天','第二天','第三天','第四天','第五天','第六天','第七天'],
            datasets:[{
                label:'第一周任务统计',//表头
                data:[12,35,45,25,45,85,95],//数据
                borderColor: "rgba(110,20,120,1)",
                backgroundColor: [ //给柱状图添加颜色
                    'rgba(255, 255, 255, 0)',
                ]
            }]
        },
        options:{
            responsive:false,//响应式
            //坐标从0开始
            scales:{
                yAxes:[{
                    ticks:{beginAtZero:true}
                }]
            }
        }
    });

    var ctx=y2.getContext('2d');
    new Chart(ctx,{
        //        type:'bar',//柱状图
        type:'line',//曲线图
        data:{
            labels:['第一天','第二天','第三天','第四天','第五天','第六天','第七天'],
            datasets:[{
                label:'第二周任务统计',//表头
                data:[12,35,45,25,45,85,95],//数据
                borderColor: "rgba(220,20,80,1)",
                backgroundColor: [ //给柱状图添加颜色
                    'rgba(255, 255, 255, 0)',
                ]
            }]
        },
        options:{
            responsive:false,//响应式
            //坐标从0开始
            scales:{
                yAxes:[{
                    ticks:{beginAtZero:true}
                }]
            }
        }
    });


    var ctx=y3.getContext('2d');
    new Chart(ctx,{
        //        type:'bar',//柱状图
        type:'line',//曲线图
        data:{
            labels:['第一天','第二天','第三天','第四天','第五天','第六天','第七天'],
            datasets:[{
                label:'第三周任务统计',//表头
                data:[12,35,45,25,45,85,95],//数据
                borderColor: "rgba(50,220,120,1)",
                backgroundColor: [ //给柱状图添加颜色
                    'rgba(255, 255, 255, 0)',
                ]
            }]
        },
        options:{
            responsive:false,//响应式
            //坐标从0开始
            scales:{
                yAxes:[{
                    ticks:{beginAtZero:true}
                }]
            }
        }
    });


    var ctx=y4.getContext('2d');
    new Chart(ctx,{
        //        type:'bar',//柱状图
        type:'line',//曲线图
        data:{
            labels:['第一天','第二天','第三天','第四天','第五天','第六天','第七天'],
            datasets:[{
                label:'第四周任务统计',//表头
                data:[12,35,45,25,45,85,95],//数据
                borderColor: "rgba(60,80,190,1)",
                backgroundColor: [ //给柱状图添加颜色
                    'rgba(255, 255, 255, 0)',
                ]
            }]
        },
        options:{
            responsive:false,//响应式
            //坐标从0开始
            scales:{
                yAxes:[{
                    ticks:{beginAtZero:true}
                }]
            }
        }
    });


}]);
//创建一个子控制器：第二阶段成绩
app.controller('score_2Ctrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.list=[
        {id:0,name:'霍兰德职业兴趣测试结果','result':'RIA'},
        {id:0,name:'气质性格测试结果','result':'多血质'},
        {id:0,name:'MBTI人格测试结果','result':'ISTJ'},
        {id:0,name:'自我价值观测试结果','result':'RIA'},
        {id:0,name:'职业能力测试结果','result':'RIA'}
    ]



}]);

//创建一个子控制器：第三阶段成绩
app.controller('score_3Ctrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {



}]);