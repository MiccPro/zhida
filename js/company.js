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

        .state('companyList', {//企业：列表
            url: '/companyList',
            templateUrl: 'tpl/company/companyList.html',
            controller: 'companyListCtrl'
        })
        .state('companyDetail', {//企业：详情
            url: '/companyDetail',
            templateUrl: 'tpl/company/companyDetail.html',
            controller: 'companyDetailCtrl'
        })
        .state('workDetail', {//职位详情
            url: '/workDetail',
            templateUrl: 'tpl/company/workDetail.html',
            controller: 'workDetailCtrl'
        })
        .state('myCompany', {//我的公司：公司基本信息
            url: '/myCompany',
            templateUrl: 'tpl/company/myCompany.html'
            //,
            //controller: 'myCompanyCtrl'
        })
        .state('companyInformation', {//完善公司基本信息
            url: '/companyInformation',
            templateUrl: 'tpl/company/companyInformation.html',
            controller: 'companyInformationCtrl'
        })
        .state('postPosition', {//发布职位
            url: '/postPosition',
            templateUrl: 'tpl/company/postPosition.html',
            controller: 'postPositionCtrl'
        })
        .state('companyPosition', {//职位管理
            url: '/companyposition',
            templateUrl: 'tpl/company/companyposition.html',
            controller: 'companyPositionCtrl'
        })

  })

//创建一个子控制器：公司列表
app.controller('companyListCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
  $scope.person=['0-20','20-30','30-40','40以上'];
    $scope.place=['郑州','北京','上海','广州'];
    $scope.nature=['上市','私企','国企','民营'];
    $scope.trade=['金融','互联网','农业','制造业'];
    $scope.companyLists=[
        {"image":'img/1.jpg','name':'中国移动','place':'北京朝阳区','jobNumber':'10'},
        {"image":'img/2.jpg','name':'中国电信','place':'北京朝阳区','jobNumber':'4'},
        {"image":'img/3.jpg','name':'唯品会','place':'北京朝阳区','jobNumber':'2'},
        {"image":'img/4.jpg','name':'阿里健康','place':'北京朝阳区','jobNumber':'5'},
        {"image":'img/6.jpg','name':'中国东方航空','place':'北京朝阳区','jobNumber':'1'}
    ]
}]);

//创建一个子控制器：公司详情
app.controller('companyDetailCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.footerTabIndex = 2;
}]);

//创建一个子控制器：职位详情
app.controller('workDetailCtrl', ['$scope', '$sellHttp','$ionicPopup',
    function ($scope, $sellHttp,$ionicPopup) {
      $scope.sendShow=true;
      $scope.sendResume=function(){//投递简历
          $ionicPopup.alert({
                      template: '投递成功'
          });
          $scope.sendShow=false;
      };
        $scope.collect=function(){//收藏职位
            $ionicPopup.alert({
                template: '收藏成功'
            });
        }
}]);

//职位管理
app.controller('companyPositionCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);
//发布职位
app.controller('postPositionCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);


//创建一个子控制器：简历
app.controller('resumeCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {

}]);

//创建一个子控制器：完善企业基本信息
app.controller('companyInformationCtrl', ['$scope', '$sellHttp',function ($scope, $sellHttp) {
    $scope.lists={'photo':'','name':'','trade':'','nature':'','scale':'','url':''};
    $scope.submit=function(){
        console.log( $scope.lists);
        $scope.$parent.jump('Main');
    }
}]);