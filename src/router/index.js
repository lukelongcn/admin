import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

/* login */
const Login = _import('login/index')

/* dashboard */
const dashboard = _import('dashboard/index')

/* error page */
const Err404 = _import('404')

/*活动管理*/
const activityList = _import('activity/activity_list')
const activityManage = _import('activity/activity_manage')
const hongbao = _import('activity/hongbao')
const hongbaoPeople = _import('activity/hongbao_people')


/*社区管理*/
const functionAssort = _import('community/content/function_assort')
const functionList = _import('community/content/function_list')
const articleAssort = _import('community/content/article_assort')
const articleList = _import('community/content/article_list')
const singlePage = _import('community/content/single_page')
const goodsList = _import('community/content/goods_list')

/*订单管理*/
const orderList = _import('order/list')

/*财务管理*/
const customer = _import('finance/customer')
const withdraw = _import('finance/withdraw')
const bankCard = _import('finance/bank_card')
const moneyDetail = _import('finance/money_detail')
const vDetail = _import('finance/v_detail')
const withdrawDetail = _import('finance/withdraw_detail')

/*基础设置*/
const accountBlacklist = _import('base/account_blacklist')
const phoneBlacklist = _import('base/phone_blacklist')
const params = _import('base/params')
const backCard = _import('base/bank_card')
const admins = _import('base/admins')
const version = _import('base/version')

/* 系统设置*/
const systemMenus = _import('systems/menus')
const systemRoles = _import('systems/roles')
const systemUsers = _import('systems/users')
const systemDepartment = _import('systems/department')
const systemAction = _import('systems/action')

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', component: Login, hidden: true},
  {path: '/404', component: Err404, hidden: true},
  {   // 默认打开工作台
    path: '',
    component: Layout,
    redirect: '/work',
    meta_name: 'Home2',
    icon: 'zujian',
    noDropdown: true,
    children: [{path: 'work', component: dashboard, name: '我的工作台'}]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta_name :   用来控制路由表的动态显示 对应菜单管理的route_name
 * 当前版本没有权限设置
 **/

export const asyncRouterMap = [
  {
    path: '/activity',
    component: Layout,
    redirect: 'noredirect',
    name: '活动管理',
    meta_name: 'Activity',
    icon: 'zujian',
    children: [
      {path: 'activityList', component: activityList, name: '活动列表', meta_name: 'activityList'},
      {path: 'activityManage', component: activityManage, name: '活动管理', meta_name: 'activityManage'},
      {path: 'hongbao', component: hongbao, name: '抢红包', meta_name: 'hongbao'},
      {path: 'hongbaoPeople', component: hongbaoPeople, name: '参与列表', meta_name: 'hongbaoPeople', hidden: true}
    ]
  },
  {
    path: '/community',
    component: Layout,
    redirect: 'noredirect',
    name: '社区管理',
    meta_name: 'Community',
    icon: 'zujian',
    children: [
      {path: 'fnassort', component: functionAssort, name: '功能分类', meta_name: 'functionAssort'},
      {path: 'fnlist', component: functionList, name: '功能列表', meta_name: 'functionList', hidden: true},
      {path: 'article_assort', component: articleAssort, name: '文章分类', meta_name: 'articleAssort'},
      {path: 'article_list', component: articleList, name: '文章列表', meta_name: 'articleList'},
      {path: 'single_page', component: singlePage, name: '单网页管理', meta_name: 'singlePage'},
      {path: 'goods_list', component: goodsList, name: '商品列表', meta_name: 'goodsList'},
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: 'noredirect',
    name: '订单管理',
    meta_name: 'Order',
    icon: 'zujian',
    children: [
      {path: 'orderList', component: orderList, name: '活动列表', meta_name: 'orderList'},
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: 'noredirect',
    name: '财务管理',
    meta_name: 'Finance',
    icon: 'zujian',
    children: [
      {path: 'customer', component: customer, name: '用户资金', meta_name: 'customer'},
      {path: 'withdraw', component: withdraw, name: '提现管理', meta_name: 'withdraw'},
      {path: 'moneyDetail', component: moneyDetail, name: '钱包明细', meta_name: 'moneyDetail', hidden: true},
      {path: 'vDetail', component: vDetail, name: 'V币明细', meta_name: 'vDetail', hidden: true},
      {path: 'withdrawDetail', component: withdrawDetail, name: '提现明细', meta_name: 'withdrawDetail', hidden: true},
      {path: 'bankCard', component: bankCard, name: '银行卡', meta_name: 'bankCard', hidden: true},
    ]
  },
  {
    path: '/base',
    component: Layout,
    redirect: 'noredirect',
    name: '基础设置',
    meta_name: 'Base',
    icon: 'zujian',
    children: [
      {path: 'accountBlacklist', component: accountBlacklist, name: '账户黑名单', meta_name: 'accountBlacklist'},
      {path: 'phoneBlacklist', component: phoneBlacklist, name: '手机黑名单', meta_name: 'phoneBlacklist'},
      {path: 'params', component: params, name: '参数配置', meta_name: 'params'},
      {path: 'backCard', component: backCard, name: '银行卡管理', meta_name: 'backCard'},
      {path: 'admins', component: admins, name: '管理员', meta_name: 'admins'},
      {path: 'version', component: version, name: '版本管理', meta_name: 'version'},
    ]
  },
  {
    path: '/systems',
    component: Layout,
    redirect: 'noredirect',
    name: '系统设置',
    meta_name: 'Systems',
    icon: 'zujian',
    children: [
      {path: 'menus', component: systemMenus, name: '菜单管理', meta_name: 'systemMenus'},
      {path: 'roles', component: systemRoles, name: '角色管理', meta_name: 'systemRoles'},
      {path: 'users', component: systemUsers, name: '系统用户', meta_name: 'systemUsers'},
      {path: 'department', component: systemDepartment, name: '部门管理', meta_name: 'systemDepartment'},
      {path: 'menus/action/:id', component: systemAction, name: 'actions', hidden: true, meta_name: 'systemAction'}
    ]
  }
]