/**
 * Created by bjwsl-001 on 2017/6/15.
 */

//1.创建模块
var app = angular.module('kfl', ['ng','ionic']);

//自定义服务
app.service('$sellHttp',
    ['$http', '$ionicLoading',
      function ($http, $ionicLoading) {
        //url:请求的地址和参数 handleSucc:成功之后的处理函数
        this.sendRequest = function (url, handleSucc) {
          $ionicLoading.show({template: 'loading...'})
          $http
              .get(url)
              .success(function (data) {
                $ionicLoading.hide();
                handleSucc(data);
              })
        }

      }])


//配置状态
app.config(
  function ($stateProvider,
            $ionicConfigProvider,
            $urlRouterProvider) {

    //调整tabs固定在底部（无论是在哪个平台）
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
      .state('Start', {//开始
        url: '/Start',
        templateUrl: 'tpl/start.html',
        controller: 'StartCtrl'
      })
      .state('Main', {//首页
        url: '/Main',
        templateUrl: 'tpl/main.html',
        controller: 'MainCtrl'
      })
        .state('MyOrder', {//我的
            url: '/MyOrder',
            templateUrl: 'tpl/myOrder.html',
            controller: 'MyOrderCtrl'
        })
        .state('PI', {//我的：个人信息
            url: '/PI',
            templateUrl: 'tpl/include/myorder/PI.html',
            controller: 'PICtrl'
        })
        .state('help', {//帮助与反馈
            url: '/help',
            templateUrl: 'tpl/include/myorder/help.html',
            controller: 'helpCtrl'
        })
        .state('helpSon', {//帮助与反馈:答案
            url: '/helpSon/:id',
            templateUrl: 'tpl/include/myorder/helpSon.html',
            controller: 'helpSonCtrl'
        })
        .state('changePWD', {//修改密码
            url: '/changePWD',
            templateUrl: 'tpl/include/myorder/changePWD.html',
            controller: 'changePWDCtrl'
        })
        .state('register', {//注册
            url: '/register',
            templateUrl: 'tpl/include/register.html',
            controller: 'registerCtrl'
        })
        .state('login', {//登录
            url: '/login',
            templateUrl: 'tpl/include/login.html',
            controller: 'loginCtrl'
        })
        .state('forgetPwd1', {//找回密码1
            url: '/forgetPwd1',
            templateUrl: 'tpl/include/forgetPwd1.html'
            //,
            //controller: 'forgetPwd1Ctrl'
        })
        .state('forgetPwd2', {//找回密码2
            url: '/forgetPwd2',
            templateUrl: 'tpl/include/forgetPwd2.html'
            //,
            //controller: 'forgetPwd2Ctrl'
        })
        .state('forgetPwd3', {//找回密码3
            url: '/forgetPwd3',
            templateUrl: 'tpl/include/forgetPwd3.html'
            //,
            //controller: 'forgetPwd3Ctrl'
        })
        .state('set', {//设置
            url: '/set',
            templateUrl: 'tpl/include/myorder/set.html',
            controller: 'setCtrl'
        })
        .state('our', {//关于我们
            url: '/our',
            templateUrl: 'tpl/include/myorder/our.html',
            controller: 'ourCtrl'
        })
        .state('news', {//消息
            url: '/news',
            templateUrl: 'tpl/news.html',
            controller: 'newsCtrl'
        })
        .state('search', {//消息
            url: '/search',
            templateUrl: 'tpl/search.html',
            controller: 'SearchCtrl'
        })

    $urlRouterProvider.otherwise('/Start');

  })

//创建一个父控制器
app.controller('parentCtrl', ['$scope', '$state','$rootScope','$sellHttp',
  function ($scope, $state,$rootScope,$sellHttp) {
      //判断用户是否登录
      if(localStorage.role){
          $rootScope.role=localStorage.role;
      }
      //$sellHttp.sendRequest(
      //    'http://192.168.0.110:8080/shop/api/navigation/list.do?',
      //    function (result) {
      //        console.log(result);
      //        console.log(result.data.navigation);
      //        //$scope.lists = data;
      //        //$scope.pageNum++;
      //    }
      //);

      //跳转
        $scope.jump = function (desState, arg) {
          $state.go(desState, arg);
        };
        //切换功能tab签及其内容
        $scope.tabIndex = 0;
        $scope.tabChanged = function(index){
            console.log('index',index);
          $scope.tabIndex = index;
        };
      //页脚页签的选中状态,是否显示返回键
      $scope.footerTabIndex = 0;
      $scope.footerTabChanged = function(index){
          $scope.footerTabIndex = index;
          console.log('index',index);
      };
      //切换功能tab签及其内容
      $scope.menuIndex = 0;
      $scope.select = function(index){
          console.log(index);
          $scope.menuIndex = index;
      };

      //返回功能(返回键<）
      $scope.backWard = function() {
          history.back();
      }

  }
]);
//创建一个子控制器：开始
app.controller('StartCtrl', ['$scope','$state','$timeout',function ($scope,$state, $timeout) {
    //定时
    $timeout(function(){
        $state.go('register');
    },1000);
}
]);
//创建一个子控制器：注册
app.controller('registerCtrl', ['$scope', '$sellHttp','$rootScope','$ionicPopup',
    function ($scope, $sellHttp,$rootScope,$ionicPopup) {
        $scope.user={'role':'','account':'','pwd':''};
        $scope.register = function() {
            //$sellHttp.sendRequest(
            //    'http://192.168.0.110:8080/shop/api/register/submit.do?username=' + $scope.user.uname+ '&phone=' + $scope.user.phone+ '&enPassword=' + $scope.user.pwd,
            //    function (result) {
            //        if(result.code!=1){
            //            alert("注册失败！");
            //        }else{
            $rootScope.isLogin = true;
            //            $rootScope.uid= result.uid;
            //            $rootScope.uname= result.uname;
            //            $rootScope.phone= result.phone;
            //            $scope.$parent.jump('Main0');
            $rootScope.phone= $scope.user.phone;
            $ionicPopup.alert({
                template: '恭喜您注册成功'
            })
            //history.back(-1);
            if($scope.user.role==1) {
                $scope.$parent.jump('information');
            }else if($scope.user.role==2){
                    $scope.$parent.jump('schoolInformation');
            }else{
                $scope.$parent.jump('companyInformation');
            }


            //判断当前用户是否登录:角色
            localStorage.role=$scope.user.role;
            //console.log($scope.user.role,'22')
            //        }
            //    }
            //);
        }
    }]);

//创建一个子控制器：登录
app.controller('loginCtrl', ['$scope', '$sellHttp','$rootScope',function ($scope, $sellHttp,$rootScope) {
    $scope.login=function(){
        //$sellHttp.sendRequest(
        //    'data/order_add.php?phone=' + $scope.phone + '&upwd=' + $scope.pwd,
        //    function (result) {
        //        console.log(result);
        //        if(result.code!=1){
        //            $scope.error = "用户名或密码不正确";
        //        }else{
        $rootScope.isLogin = true;
        //            $rootScope.uid= result.uid;
        //            $rootScope.uname= result.uname;
        //            $rootScope.phone= result.phone;
        $rootScope.phone= $scope.phone ;
        localStorage.role=$scope.account;
        //判断当前用户是否登录:角色
        $rootScope.role=localStorage.role;
        //console.log('role',$rootScope.role);
        //history.back(-1);
         $scope.$parent.jump('Main');
        //        }
        //    }
        //)
    }
}]);

//创建一个子控制器：首页
app.controller('MainCtrl', ['$scope', '$sellHttp','$timeout','$ionicScrollDelegate',function ($scope, $sellHttp,$timeout,$ionicScrollDelegate) {
    $scope.footerTabIndex = 0;
    //定义轮播的数据
    $scope.imgArray = ['img/banner_01.jpg','img/banner_02.jpg',
        'img/banner_03.jpg','img/banner_04.jpg'];

    $scope.xueli=['全部','中专及以下','高中','大专','本科','硕士','博士'];
    $scope.jingyan=['应届生','1年','1-3年','3年以上'];
    $scope.xinzi=['3k以下','3K-5K','5K-10K','10K-20K','20K-40K'];
    $scope.yixiang=['兼职','全职'];

    $scope.dochosXL=function (index,h) {
        $scope.XLindex=index;
        $scope.xl=h;
        console.log(h);
    };
    $scope.dochosJY=function (index,h) {
        $scope.JYindex=index;
        $scope.jy=h;
        console.log(h);
    };
    $scope.dochosXZ=function (index,h) {
        $scope.XZindex=index;
        $scope.xz=h;
        console.log(h);
    };
    $scope.dochosYX=function (index,h) {
        $scope.YXindex=index;
        $scope.yx=h;
        console.log(h);
    };

    $scope.companyList=[
        {'id':0,'image':'img/1.jpg'},
        {'id':1,'image':'img/2.jpg'},
        {'id':2,'image':'img/3.jpg'},
        {'id':3,'image':'img/4.jpg'},
        {'id':4,'image':'img/5.jpg'}
    ];
    $scope.schoolList=[
        {'id':0,'image':'img/school1.jpg'},
        {'id':1,'image':'img/school4.jpg'},
        {'id':2,'image':'img/school3.jpg'},
        {'id':3,'image':'img/school2.jpg'},
        {'id':4,'image':'img/school5.jpg'}
    ];
    $scope.workList=[
        {'id':0,'name':'销售','place':'北京','person':'3','company':'申通快递有限公司','time':'2018-04-27'},
        {'id':1,'name':'人事管理','place':'北京','person':'1','company':'申通快递有限公司','time':'2018-04-27'},
        {'id':2,'name':'运营专员','place':'北京','person':'3','company':'申通快递有限公司','time':'2018-04-27'},
        {'id':3,'name':'财务会计','place':'北京','person':'1','company':'申通快递有限公司','time':'2018-04-27'},
        {'id':4,'name':'文案企划','place':'北京','person':'2','company':'申通快递有限公司','time':'2018-04-27'}
    ];
    $scope.Mainshow1 = false;
    $scope.Mainshow2 = false;
    $scope.mainTabIndex = 0;
    $scope.showClick = function(index){
        $scope.mainTabIndex = index;
        if(index==1){
            $scope.Mainshow1=! $scope.Mainshow1;
            if($scope.Mainshow2){
                $scope.Mainshow2 = false;
            }
        }else{
            $scope.Mainshow2=! $scope.Mainshow2;
            $ionicScrollDelegate.scrollBottom();
            if($scope.Mainshow1){
                $scope.Mainshow1 = false;
            }
        }

    };
    $scope.doyaoqiu=function () {
        $scope.xl='';
        $scope.jl='';
        $scope.xz='';
        $scope.yx='';
        $scope.XLindex=null;
        $scope.JYindex=null;
        $scope.XZindex=null;
        $scope.YXindex=null;
        $scope.Mainshow2=false;
    };
    //加载首页数据
    //$scope.hasMore = true;//加载更多
    //$scope.pageNum = 1;
    //$sellHttp.sendRequest(
    //    'php/news_list.php?pageNum='+$scope.pageNum,
    //    function (data) {
    //        console.log(data);
    //        $scope.lists = data;
    //        $scope.pageNum++;
    //    }
    //);
    ////加载更多
    //$scope.loadMore = function () {
    //    $timeout(function () {//并非马上加载，而是2s后再加载
    //        $sellHttp.sendRequest(
    //            'php/news_list.php?pageNum='+$scope.pageNum,
    //            function (data) {
    //                if($scope.pageNum == data.pageCount)
    //                {
    //                    $scope.hasMore = false;
    //                }
    //                $scope.newsList = $scope.newsList.concat(data);
    //                $scope.pageNum++;
    //                //本次下拉动作结束
    //                $scope.$broadcast('scroll.infiniteScrollComplete');
    //            }
    //        )
    //    },2000);
    //};
}]);

//创建一个子控制器：消息
app.controller('newsCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.footerTabIndex=1;//底部高亮

    $scope.newsTabIndex=0;
    $scope.newsTabChanged=function(index){
        $scope.newsTabIndex=index;
    }
}]);

//创建一个子控制器：搜索
app.controller('SearchCtrl', ['$scope', '$http','$sellHttp','$stateParams','$filter',
    function ($scope,$http, $sellHttp,$stateParams,$filter) {
        //热词搜索
        $scope.data=['前端','java','运维','nodeJS'];
        //搜索下拉列表
        $scope.list=['前端1','前端2','前端工程师'];
        $scope.listShow=false;//搜素框获取焦点时的下拉框
        //搜索到的产品列表
        $scope.workList=[
            {'id':0,'name':'销售','place':'北京','person':'3','company':'申通快递有限公司','time':'2018-04-27'},
            {'id':1,'name':'人事管理','place':'北京','person':'1','company':'申通快递有限公司','time':'2018-04-27'},
            {'id':2,'name':'运营专员','place':'北京','person':'3','company':'申通快递有限公司','time':'2018-04-27'},
            {'id':3,'name':'财务会计','place':'北京','person':'1','company':'申通快递有限公司','time':'2018-04-27'},
            {'id':4,'name':'文案企划','place':'北京','person':'2','company':'申通快递有限公司','time':'2018-04-27'}
        ];
        console.log('搜索接收的参数',$stateParams);

        if(localStorage.getItem('history')){
            var sign2 = localStorage.getItem('history');
            sign2 = sign2.split(",");
            $scope.yarr=$filter('arr_filter')(sign2);
            //console.log( $scope.yarr)
        }else {
            $scope.yarr = [];
        }

        $scope.inputTxt = {kw: ''};
        if(!$scope.inputTxt.kw && $stateParams.id){
            //console.log('搜索1');
            $scope.isShow = false;
            //$sellHttp.sendRequest (
            //    'http://192.168.0.101:8080/shop/api/product/listCategory/'+$stateParams.id+'.do',
            //    function(result){
            //        console.log('搜索获取的数据',result.data);
            $scope.lists = data;
            //        console.log('搜索获取的数据1', $scope.lists);
            //    }
            //)
        }else{
            //console.log('搜索2');
            $scope.isShow = true;
            //监听用户输入 的关键词进行搜索
            //$scope.$watch('inputTxt.kw', function () {console.log('搜索3');
            $scope.btnClicked = function(h){//给搜索按钮绑定事件
                //console.log('搜索3');
                $scope.isShow=false;//热搜
                $scope.listShow=false;//搜索下拉列表
                $scope.inputTxt.kw=h;
                if($scope.inputTxt.kw != '') {
                    $scope.yarr.unshift($scope.inputTxt.kw);
                    $scope.yarr=$filter('arr_filter')( $scope.yarr);
                    localStorage.setItem('history', $scope.yarr);

                    //var url = "http://192.168.0.101:8080/shop/api/product/search.do";
                    //var ajax = new ajaxClass($http, url, "POST");
                    //ajax.data = $.param({"keyword": $scope.inputTxt.kw});                // 传递表单数据的时候要使用$.param不然服务器没法正常捕获到发送的数据
                    //ajax.headers = {'Content-Type': 'application/x-www-form-urlencoded'};            // 千万记住要传递表单数据的时候设置请求头
                    //ajax.successCallback = function (res) {
                    //    console.log('搜索获取的数据', res);
                    $scope.lists =data;
                    //    console.log($scope.lists);
                    //};
                    //ajax.failureCallback = function (res) {
                    //};
                    //ajax.requestData();
                }
            }

        }
        //热门搜索
        $scope.selectWord =function(h){
            $scope.inputTxt.kw=h;
            $scope.isShow=false;
            //console.log($scope.inputTxt.kw,h);
            $scope.yarr.unshift($scope.inputTxt.kw);
            $scope.yarr=$filter('arr_filter')( $scope.yarr);
            localStorage.setItem('history', $scope.yarr);
            //var url = "http://192.168.0.101:8080/shop/api/product/search.do";
            //var ajax = new ajaxClass($http, url, "POST");
            //ajax.data = $.param({"keyword": $scope.inputTxt.kw});                // 传递表单数据的时候要使用$.param不然服务器没法正常捕获到发送的数据
            //ajax.headers = {'Content-Type': 'application/x-www-form-urlencoded'};            // 千万记住要传递表单数据的时候设置请求头
            //ajax.successCallback = function (res) {
            //    console.log('搜索获取的数据', res);
            $scope.lists = data;
            //    console.log($scope.lists);
            //};
            //ajax.failureCallback = function (res) {
            //};
            //ajax.requestData();
        };

        //清空历史记录
        $scope.ydoclean=function () {
            localStorage.removeItem('history');
            $scope.yarr = [];
        };
        //搜索框获取焦点
        $scope.onInput1=function(){
            $scope.$watch('inputTxt.kw', function (){
                if( $scope.inputTxt.kw !=''){
                    //console.log('获取焦点0');
                    $scope.listShow=true;
                    $scope.isShow=false;
                }else{
                    //console.log('获取焦点1');
                    $scope.listShow=false;
                    $scope.isShow=true;
                }
            });
        };
        //搜索框失去焦点
        $scope.onInput2=function(){
            $scope.listShow=false;
        };

    }]);

//个人中心
app.controller('MyOrderCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.footerTabIndex=4;//底部高亮
}]);
//个人中心：个人信息
app.controller('PICtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.lists=[
        {id:'0',title:'姓名',content:'张三',role:'0'},
        {id:'1',title:'微信号',content:'1234567',role:'0'},
        {id:'2',title:'邮箱',content:'123@qq.com',role:'0'},
        {id:'3',title:'所在公司',content:'京东',role:'3'},
        {id:'4',title:'我的职位',content:'人事',role:'3'}

    ];
    $scope.model_show = false;//隐藏模态框
    $scope.show=function(content){//显示/退出模态框
        $scope.model_show=!$scope.model_show;
        $scope.PIdata = content;

    };

    $scope.submit=function() {
        $scope.model_show = !$scope.model_show;
    }
}]);
//帮助与反馈
app.controller('helpCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.lists=[
        {'id':'10','problem':'找到工作后，如何删除简历？'},
        {'id':'11','problem':'如何让某些企业无法搜到我的简历？'},
        {'id':'12','problem':'如何修改邮箱？'},
        {'id':'13','problem':'我忘记了密码，怎么办？'},
        {'id':'14','problem':'投出去的简历还能撤回吗？'}
    ];
}]);

//帮助与反馈----答案
app.controller('helpSonCtrl', ['$scope', '$sellHttp','$stateParams',
    function ($scope, $sellHttp,$stateParams) {
    console.log($stateParams.id);
    $scope.id=$stateParams.id;
    $scope.lists=[
        {'id':'10','problem':'找到工作后，如何删除简历？','answer':'简历信息是帐号的必要组成部分，并且为了方便您下次求职，简历无法删除，但可以将简历状态设置为【保密】'},
        {'id':'11','problem':'如何让某些企业无法搜到我的简历？','answer':'登录楚楚推，进入个人中心即可查看订单信息。'},
        {'id':'12','problem':'如何修改邮箱？','answer':'用户可以使用未在职达号注册过的邮箱，来替换已有的邮箱。'},
        {'id':'13','problem':'我忘记了密码，怎么办？','answer':'忘记密码可以通过找回密码功能重置密码'},
        {'id':'14','problem':'投出去的简历还能撤回吗？','answer':'简历投递后将无法撤回，请谨慎投递'}
    ]
}]);
//修改密码
app.controller('changePWDCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
  $scope.user=['pwd1','pwd2'];
    $scope.submit=function(){
        history.back(-1);//返回上一步
    }
}]);

//关于我们
app.controller('ourCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.user=['pwd1','pwd2']
}]);

//设置
app.controller('setCtrl', ['$scope', '$rootScope','$sellHttp',
    function ($scope,$rootScope, $sellHttp) {
    $scope.model_show = false;//退出登录模态框
    $scope.loginOut=function(){
        $scope.model_show=!$scope.model_show
    };
    $scope.show=function(){
        $scope.model_show=!$scope.model_show
    };
    $scope.cancel=function(){
        $scope.model_show=!$scope.model_show
    };

    $scope.login_out=function(){
        console.log('退出');
        localStorage.clear();
        $scope.model_show=!$scope.model_show;
        $scope.$parent.jump('login');
    }

}]);

//上传多张图片
app.directive('fileModel', ['$parse', 'fileReader', function($parse, fileReader) {
    return {
        restrict:'A',
        link:function(scope, element, attrs, ngModel) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            var imgviewID = attrs["imgViewId"];
            var imgView = angular.element(document.querySelector("."+imgviewID));
            element.bind('change', function(event) {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
                //附件预览
                scope.file = (event.srcElement || event.target).files[0];
                console.log( scope.file);
                fileReader.readAsDataUrl(scope.file, scope).then(function(result) {
                    //console.log( result);
                    imgView.attr("src",result);
                });
            });
        }
    }
}]);

app.factory('fileReader', ["$q", "$log", function($q, $log) {
    var onLoad = function(reader, deferred, scope) {
        return function() {
            scope.$apply(function() {
                deferred.resolve(reader.result);
            });
        }
    }

    var onError = function(reader, deferred, scope) {
        return function() {
            scope.$apply(function() {
                deferred.reject(reader.result);
            });
        };
    };

    var getReader = function(deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        return reader;
    };

    var readAsDataURL = function(file, scope) {
        var deferred = $q.defer();
        var reader = getReader(deferred, scope);
        reader.readAsDataURL(file);
        return deferred.promise;
    }
    return {
        readAsDataUrl: readAsDataURL
    };
}
]);

//搜索历史记录：去重
app.filter('arr_filter', function() {
    return function(value) {
        console.log(value);
        for(var i= 0;i<value.length;i++){
            for(var j=i+1;j<value.length;j++){
                if(value[i]==value[j]){
                    value.splice(j,1);
                    value.length--;
                    j--;
                }
            }
        }
        return value;
    }
});

