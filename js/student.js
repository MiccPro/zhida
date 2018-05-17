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
        .state('resume', {//学生：简历
            url: '/resume',
            templateUrl: 'tpl/student/resume.html',
            controller: 'resumeCtrl'
        })
        .state('information', {//学生：注册信息
            url: '/information',
            templateUrl: 'tpl/student/information.html',
            controller: 'informationCtrl'
        })
        .state('interview', {//学生：接受面试
            url: '/interview',
            templateUrl: 'tpl/student/Interview.html',
            controller: 'interviewCtrl'
        })
        .state('personalDetail', {//编辑个人简历
            url: '/personalDetail',
            templateUrl: 'tpl/student/set-resume/personal-detail.html'
            
        })
        .state('jobIntension', {//求职意向
            url: '/jobIntension',
            templateUrl: 'tpl/student/set-resume/job-intension.html'
            
        })
        .state('addExperience', {//工作经验
            url: '/addExperience',
            templateUrl: 'tpl/student/set-resume/add-experience.html'
            
        })
        .state('changeExperience', {//更改工作经验
            url: '/changeExperience',
            templateUrl: 'tpl/student/set-resume/change-experience.html'
            
        })
        .state('award', {//活动奖励
            url: '/award',
            templateUrl: 'tpl/student/set-resume/award.html'
            
        })
        .state('evaluate', {//自我评价
            url: '/evaluate',
            templateUrl: 'tpl/student/set-resume/evaluate.html'
            
        })
        .state('hobby', {//特长爱好
            url: '/hobby',
            templateUrl: 'tpl/student/set-resume/hobby.html'
            
        })
        .state('resumePreview', {//简历预览
            url: '/resumePreview',
            templateUrl: 'tpl/student/set-resume/resume-preview.html'
        })
        .state('course', {//学生：课程
            url: '/course',
            templateUrl: 'tpl/student/course.html',
            controller: 'courseCtrl'
        })
        .state('career', {//学生：课程:职业核心能力训练
            url: '/career',
            templateUrl: 'tpl/student/courses/career.html',
            controller: 'careerCtrl'
        })
        .state('careerResult', {//学生：课程:职业核心能力训练一周结果
            url: '/careerResult/:id',
            templateUrl: 'tpl/student/courses/careerResult.html',
            controller: 'careerResultCtrl'
        })
        .state('careerList', {//学生：课程:职业核心能力训练结果记录
            url: '/careerList',
            templateUrl: 'tpl/student/courses/careerList.html',
            controller: 'careerListCtrl'
        })

        .state('test', {//学生：课程:测试
            url: '/test',
            templateUrl: 'tpl/student/courses/test.html',
            controller: 'testCtrl'
        })
        .state('work', {//学生：课程:霍兰德测试
            url: '/work',
            templateUrl: 'tpl/student/courses/work.html',
            controller: 'workCtrl'
        })
        .state('workResult', {//学生：课程:霍兰德测试结果
            url: '/workResult',
            templateUrl: 'tpl/student/courses/workResult.html'
            , controller: 'workResultCtrl'
        })
        .state('temperament', {//学生：课程：气质性格测试
            url: '/temperament',
            templateUrl: 'tpl/student/courses/temperament.html',
            controller: 'temperamentCtrl'
        })
        .state('temperamentResult', {//学生：课程：气质性格测试结果
            url: '/temperamentResult',
            templateUrl: 'tpl/student/courses/temperamentResult.html'
            //, controller: 'temperamentResultCtrl'
        })
        .state('MBTI', {//学生：课程:MBTI测试
            url: '/MBTI',
            templateUrl: 'tpl/student/courses/MBTI.html',
            controller: 'MBTICtrl'
        })
        .state('MBTIresult', {//学生：课程:MBTI测试结果
            url: '/MBTIresult',
            templateUrl: 'tpl/student/courses/MBTIresult.html'
            //, controller: 'MBTIresultCtrl'
        })
        .state('value', {//学生：课程:自我价值观测试
            url: '/value',
            templateUrl: 'tpl/student/courses/value.html',
            controller: 'valueCtrl'
        })
        .state('valueResult', {//学生：课程:自我价值观测试结果
            url: '/valueResult',
            templateUrl: 'tpl/student/courses/valueResult.html',
            controller: 'valueResultCtrl'
        })
        .state('ability', {//学生：课程:职业能力测试
            url: '/ability',
            templateUrl: 'tpl/student/courses/ability.html',
            controller: 'abilityCtrl'
        })
        .state('abilityResult', {//学生：课程:职业能力测试结果
            url: '/abilityResult',
            templateUrl: 'tpl/student/courses/abilityResult.html'
            //,
            //controller: 'abilityResultCtrl'
        })
        .state('summarize', {//学生：课程:自我分析报告
            url: '/summarize',
            templateUrl: 'tpl/student/courses/summarize.html',
            controller: 'summarizeCtrl'
        })
        .state('report', {//学生：课程:职业体验报告
            url: '/report',
            templateUrl: 'tpl/student/courses/report.html',
            controller: 'reportCtrl'
        })
        .state('check', {//学生：课程:4阶段审核结果
            url: '/check',
            templateUrl: 'tpl/student/courses/check.html',
            controller: 'checkCtrl'
        })
        .state('teacher', {//个人中心：我的老师
            url: '/teacher',
            templateUrl: 'tpl/student/myorder/teacher.html'
            //,
            //controller: 'teacherCtrl'
        })
        .state('sendResume', {//个人中心：投递记录
            url: '/sendResume',
            templateUrl: 'tpl/student/myorder/send_resume.html',
            controller: 'sendResumeCtrl'
        })
        .state('invite', {//个人中心：投递记录
            url: '/invite',
            templateUrl: 'tpl/student/myorder/invite.html',
            controller: 'inviteCtrl'
        })
        .state('collect', {//个人中心：收藏的职位
            url: '/collect',
            templateUrl: 'tpl/student/myorder/collect.html',
            controller: 'collectCtrl'
        })
  })

//创建一个子控制器：课程
app.controller('courseCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.footerTabIndex=3;//底部高亮

}]);
//创建一个子控制器：职业核心能力训练
app.controller('careerCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//创建一个子控制器：职业核心能力训练一周结果
app.controller('careerResultCtrl', ['$scope', '$sellHttp','$ionicPopup','$stateParams','$ionicActionSheet',
    function ($scope, $sellHttp,$ionicPopup,$stateParams,$ionicActionSheet) {
        console.log('id',$stateParams.id);//传递的周数

    var myDate = new Date();//获取系统当前时间
    var time=myDate.toLocaleDateString(); //获取当前日期
     $scope.data='';
     $scope.lists=[
         //{'data':'40','time':'2018/5/1'},
         //{'data':'60','time':'2018/5/2'},
         //{'data':'70','time':'2018/5/3'}
     ];

    $scope.model_show = false;//退出模态框
    $scope.show=function(){
        $scope.model_show=!$scope.model_show
    };
    $scope.submit=function(){
        $scope.model_show=!$scope.model_show;

        if($scope.lists.length>0){ console.log('data1');
            var time2=$scope.lists[$scope.lists.length-1].time;
                $scope.lists.push({data:$scope.data,time:time});
                $scope.data='';
                var num=$scope.lists.length;
            //if(time!=time2){
            //    $scope.lists.push({data:$scope.data,time:time});
            //    //console.log('data',$scope.lists);
            //    $scope.data='';
            //}
            //else{
            //    $ionicPopup.alert({
            //        template: '今天数据已添加'
            //    })
            //}
            if(num ==7){console.log('num',num);
                var arr=[];
                for(var i=0;i<$scope.lists.length;i++){
                    arr.push($scope.lists[i].data);
                    console.log('arr',arr,$scope.lists[i].data);
                }
                var ctx=c2.getContext('2d');
                new Chart(ctx,{
          //        type:'bar',//柱状图
                    type:'line',//曲线图
                    data:{
                        labels:['第一天','第二天','第三天','第四天','第五天','第六天','第七天'],
                        datasets:[{
                            label:'一周任务统计',//表头
                            data:arr,//数据
                            borderColor: "rgba(0,220,220,1)",
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

            }
        }else{ console.log('data2');
            $scope.lists.push({data:$scope.data,time:time});
            $scope.data='';
            console.log('data',$scope.lists);
        }
    };

        $scope.showImg = '';
        $scope.takephoto = function() {
            var cmr = plus.camera.getCamera();
            cmr.captureImage(function(p) {
                plus.io.resolveLocalFileSystemURL(p, function(entry) {
                    var yimg=new Image();
                    yimg.src=entry.fullPath;
                    yimg.setAttribute("class", "newImg");
                    document.getElementById("showImg").appendChild(yimg);
                }, function(e) {
                    alert(e.message);
                });
            }, function(e) {}, {
                filename: "_doc/camera/"
            });
        }

        // 停止摄像
        $scope.stopCapture = function() {
            console.log("stopCapture");
            $scope.cmr.stopVideoCapture();
        }

        // 摄像
        $scope.videoCapture = function() {
            $scope.cmr = plus.camera.getCamera();
            $scope.res = $scope.cmr.supportedVideoResolutions[0];
            $scope.fmt = $scope.cmr.supportedVideoFormats[0];
            $scope.cmr.startVideoCapture(function(path) {
                    plus.io.resolveLocalFileSystemURL(path, function(entry) {

                        var localurl = entry.toLocalURL(); //把拍照的目录路径，变成本地url路径，例如file:///........之类的。
                        console.log(localurl);
                        var video1 = document.createElement('video')
                        video1.src = localurl;
                        video1.setAttribute("controls", "controls");
                        video1.setAttribute("width", "300");
                        document.getElementById("showVideo").appendChild(video1);
                    });
                },
                function(error) {
                    console.log("Capture video failed: " + error.message);
                }, {
                    resolution: $scope.res,
                    format: $scope.cmr
                }
            );
            // 拍摄10s后自动完成
            setTimeout($scope.stopCapture(), 10000);
        }

        $scope.btn = function() {
            // 显示操作表
            $ionicActionSheet.show({
                buttons: [{
                    text: '<b>拍照</b>'
                },
                    {
                        text: '<b>摄像</b>'
                    },
                ],
                buttonClicked: function(index) {
                    if(index == 0) {
                        $scope.showImg
                        $scope.takephoto();
                        return true;

                    } else if(index == 1) {
                        $scope.videoCapture();
                        return true;
                    }
                }
            });
        }

}]);
//创建一个子控制器：职业核心能力训练结果记录
app.controller('careerListCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//创建一个子控制器：测试
app.controller('testCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.list=[
        {id:0,name:'霍兰德职业兴趣测试','url':'work','url2':'workResult'},
        {id:0,name:'气质性格测试','url':'temperament','url2':'temperamentResult'},
        {id:0,name:'MBTI人格测试','url':'MBTI','url2':'MBTIresult'},
        {id:0,name:'自我价值观测试','url':'value','url2':'valueResult'},
        {id:0,name:'职业能力测试','url':'ability','url2':'abilityResult'}
    ]
}]);
//创建一个子控制器：霍兰德测试
app.controller('workCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.list1=[
        {'type':'R型','content':['装配、修理电器','开卡车或拖拉机','学习五笔字型打字']},
        {'type':'I型','content':['装配、修理电器','开卡车或拖拉机','学习五笔字型打字']},
        {'type':'A型','content':['装配、修理电器','开卡车或拖拉机','学习五笔字型打字']},
        {'type':'S型','content':['装配、修理电器','开卡车或拖拉机','学习五笔字型打字']},
        {'type':'E型','content':['装配、修理电器','开卡车或拖拉机','学习五笔字型打字']},
        {'type':'C型','content':['装配、修理电器','开卡车或拖拉机','学习五笔字型打字']}
    ];
    $scope.list2=[
        {'type':'R型','content':'机械操作能力','score':''},
        {'type':'I型','content':'机械操作能力','score':''},
        {'type':'A型','content':'机械操作能力','score':''},
        {'type':'S型','content':'机械操作能力','score':''},
        {'type':'E型','content':'机械操作能力','score':''},
        {'type':'C型','content':'机械操作能力','score':''}
    ];
    $scope.result=[
        {'type':'R型','score':'20'},
        {'type':'I型','score':'40'},
        {'type':'A型','score':'30'},
        {'type':'S型','score':'23'},
        {'type':'E型','score':'26'},
        {'type':'C型','score':'46'}
    ]
}]);
//创建一个子控制器：霍兰德测试结果
app.controller('workResultCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.result=[
        {'type':'R型','score':'20'},
        {'type':'I型','score':'40'},
        {'type':'A型','score':'30'},
        {'type':'S型','score':'23'},
        {'type':'E型','score':'26'},
        {'type':'C型','score':'46'}
    ]
}]);
//创建一个子控制器：职业能力测试
app.controller('abilityCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.list8=[
        {'problem':'一般学习能力倾向（G）','answer':['快而容易的学习新内容','快而正确的解决数学题','对课文的字、词、段落和篇章的理解能力'
            ,'对学习过程的材料的记忆能力']},
        {'problem':'言语能力倾向（V）','answer':['善于表达自己的观点','阅读速度快','掌握词汇量的程度','向别人解释难懂的概念','语文成绩']},

    ];
}]);

//创建一个子控制器：MBTI测试
app.controller('MBTICtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.list5=[
        {'id':'0','problem':'你倾向从何处得到力','answer':['（E）别人','（I）自己的想法']},
        {'id':'1','problem':'你倾向从何处得到力','answer':['（E）别人','（I）自己的想法']},
        {'id':'2','problem':'你倾向从何处得到力','answer':['（E）别人','（I）自己的想法']},
        {'id':'3','problem':'你倾向相信','answer':['（N）直觉','（S）你直接的观察和经验']},
        {'id':'4','problem':'你倾向相信','answer':['（N）直觉','（S）你直接的观察和经验']},
        {'id':'5','problem':'你倾向相信','answer':['（N）直觉','（S）你直接的观察和经验']}
    ];

}]);

//创建一个子控制器：气质性格测试
app.controller('temperamentCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.list4=[
        {'problem':'做事稳妥，不做没把握的事','score':''},
        {'problem':'做事稳妥，不做没把握的事','score':''},
        {'problem':'做事稳妥，不做没把握的事','score':''},
        {'problem':'做事稳妥，不做没把握的事','score':''},
        {'problem':'做事稳妥，不做没把握的事','score':''},
        {'problem':'做事稳妥，不做没把握的事','score':''}
    ];

}
]);

//创建一个子控制器：自我价值评定测试
app.controller('valueCtrl', ['$scope', '$sellHttp',
    function ($scope, $sellHttp) {

        $scope.list4=[
            {'problem':'做事稳妥，不做没把握的事','score':''},
            {'problem':'做事稳妥，不做没把握的事','score':''},
            {'problem':'做事稳妥，不做没把握的事','score':''},
            {'problem':'做事稳妥，不做没把握的事','score':''},
            {'problem':'做事稳妥，不做没把握的事','score':''},
            {'problem':'做事稳妥，不做没把握的事','score':''}
        ];
        //发起网络请求，取指定id的详情信息并显示在视图
        //$sellHttp.sendRequest(
        //'data/dish_getbyid.php?id=' + $stateParams.id,
        //function (data) {
        //    console.log(data);
        //    $scope.dish = data[0];
        //    //保存kf_dish的did（相当于全局变量）
        //    sessionStorage.setItem(
        //        'did', $scope.dish.did);
        //}
        //)
    }]);

//创建一个子控制器：自我价值评定测试结果
app.controller('valueResultCtrl', ['$scope', '$sellHttp',
    function ($scope, $sellHttp) {
        $scope.result=[
            {'type':'A（专业）','score':'20'},
            {'type':'B（财务）','score':'40'},
            {'type':'C（家庭）','score':'30'},
            {'type':'D（社会）','score':'23'},
            {'type':'E（社区）','score':'26'},
            {'type':'F（精神）','score':'46'},
            {'type':'G（身体）','score':'26'},
            {'type':'H（智力）','score':'46'}
        ]

        //发起网络请求，取指定id的详情信息并显示在视图
        //$sellHttp.sendRequest(
        //'data/dish_getbyid.php?id=' + $stateParams.id,
        //function (data) {
        //    console.log(data);
        //    $scope.dish = data[0];
        //    //保存kf_dish的did（相当于全局变量）
        //    sessionStorage.setItem(
        //        'did', $scope.dish.did);
        //}
        //)
    }]);

//创建一个子控制器：自我分析报告---测试总结果分析
app.controller('summarizeCtrl', ['$scope', '$sellHttp',
    function ($scope, $sellHttp) {
        $scope.list=[
            {id:0,name:'霍兰德职业兴趣测试结果','result':'RIA'},
            {id:0,name:'气质性格测试结果','result':'多血质'},
            {id:0,name:'MBTI人格测试结果','result':'ISTJ'},
            {id:0,name:'自我价值观测试结果','result':'RIA'},
            {id:0,name:'职业能力测试结果','result':'RIA'}
        ];
        $scope.workList=['销售','市场推销','金融']

        //发起网络请求，取指定id的详情信息并显示在视图
        //$sellHttp.sendRequest(
        //'data/dish_getbyid.php?id=' + $stateParams.id,
        //function (data) {
        //    console.log(data);
        //    $scope.dish = data[0];
        //    //保存kf_dish的did（相当于全局变量）
        //    sessionStorage.setItem(
        //        'did', $scope.dish.did);
        //}
        //)
    }]);

//创建一个子控制器：职业体验报告
app.controller('reportCtrl', ['$scope', '$sellHttp',
    function ($scope, $sellHttp) {
        $scope.list=[
            {id:0,name:'中介'},
            {id:1,name:'同学推荐'},
            {id:2,name:'网上搜索'},
            {id:3,name:'熟人推荐'},
            {id:4,name:'家族企业'},
            {id:5,name:'其他方式'}
        ];

        //发起网络请求，取指定id的详情信息并显示在视图
        //$sellHttp.sendRequest(
        //'data/dish_getbyid.php?id=' + $stateParams.id,
        //function (data) {
        //    console.log(data);
        //    $scope.dish = data[0];
        //    //保存kf_dish的did（相当于全局变量）
        //    sessionStorage.setItem(
        //        'did', $scope.dish.did);
        //}
        //)
    }]);

//创建一个子控制器：4阶段审核结果
app.controller('checkCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//创建一个子控制器：简历
app.controller('resumeCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//编辑个人简历
app.controller('personalDetailCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//求职意向
app.controller('jobIntension', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//工作经验
app.controller('addExperience', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//更改工作经验
app.controller('changeExperience', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//创建一个子控制器：学生注册信息
app.controller('informationCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
        $scope.studentUser={'photo':'','name':'','age':'','school':'','major':'','classRoom':''};
         $scope.submit=function(){
             console.log( $scope.studentUser);
             $scope.$parent.jump('Main');
         }
}]);
//活动奖励
app.controller('award', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//自我评价
app.controller('evaluate', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//特长爱好
app.controller('hobby', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//简历预览
app.controller('resumePreview', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//投递记录
app.controller('sendResumeCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.workList=[
        {'id':0,'name':'销售','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'未查看'},
        {'id':1,'name':'人事管理','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'邀面试'},
        {'id':2,'name':'运营专员','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'不合适'},
        {'id':3,'name':'财务会计','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'不合适'},
        {'id':4,'name':'文案企划','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'不合适'}
    ];
    $scope.title=['全部','未查看','邀面试','不合适'];
    $scope.test='';
    $scope.sendTabIndex=0;
    $scope.sendTabChanged=function(index){
        $scope.sendTabIndex = index;
        if(index==0){
            $scope.test='';
        }else{
            $scope.test=$scope.title[index];
        }
    }
}]);

//邀请记录
app.controller('inviteCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.workList=[
        {'id':0,'name':'销售','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'未处理'},
        {'id':1,'name':'人事管理','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'同意'},
        {'id':2,'name':'运营专员','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'拒绝'},
        {'id':3,'name':'财务会计','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'拒绝'},
        {'id':4,'name':'文案企划','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','statue':'已下线'}
    ];
    $scope.title=['全部','未处理','同意','拒绝','已下线'];
    $scope.test='';
    $scope.sendTabIndex=0;
    $scope.sendTabChanged=function(index){
        $scope.sendTabIndex = index;
        if(index==0){
            $scope.test='';
        }else{
            $scope.test=$scope.title[index];
        }
        console.log($scope.test);
    }
}]);

//收藏职位
app.controller('collectCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.workList=[
        {'id':0,'name':'销售','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','time':'05-08'},
        {'id':1,'name':'人事管理','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','time':'05-08'},
        {'id':2,'name':'运营专员','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','time':'05-08'},
        {'id':3,'name':'财务会计','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','time':'05-08'},
        {'id':4,'name':'文案企划','price':'4k-8k','place':'北京','jingyan':'一年以内','company':'申通快递有限公司','xueli':'本科','time':'05-08'}
    ];
}]);

//创建一个子控制器：面试邀请
app.controller('interviewCtrl', ['$scope', '$sellHttp','$state',function ($scope, $sellHttp,$state) {

}]);