# day01
## 1. 项目开发准备
    项目描述
    技术选型
    API接口

## 2. 开启项目开发
    使用脚手架创建项目
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与发布

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: MSite/Search/Order/Profile

## 4. 抽取组件
    头部组件: TopHeader, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList
    
## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta
     
## 6. 后台应用
    运行后台项目(启动mongodb服务), 
    使用postman测试后台接口, 如果不一致, 修改接口文档
    
# day02

## 1. 异步显示数据
    封装ajax: 
        promise+axios封装ajax请求的函数
        封装每个接口对应的请求函数(能根据接口定义ajax请求函数)
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    vuex编码
        创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
        设计state: 从后台获取的数据
        实现actions: 
            定义异步action: async/await
            流程:　发ajax获取数据, commit给mutation
        实现mutations: 给状态赋值
        实现index: 创建store对象
        main.js: 配置store
    组件异步显示数据
        在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
        mapState(['xxx'])读取state中数据到组件中
        在模板中显示xxx的数据

## 2. 异步显示分类轮播
    通过vuex获取categorys数组(发请求, 读取)
    对数据进行整合计算(一维变为特定的二维数组)
    使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
        1). 使用watch+$nextTick()
        2). 使用回调+$nextTick()	
    使用svg图片实现loading的效果  
    
## 3. Star组件
    创建组件, 设计组件的props
    使用组件标签, 并传入相应的标签属性
    完成组件编码
    
## 4. 登陆/注册功能: 界面效果
    1). 切换登陆方式: loginWay
    2). 手机号验证: right_phone + isRightPhone计算属性
    3). 倒计时效果: computeTime + setInterval()
    4). 密码显示/隐藏的切换: isShowPwd + transition
    
# day03
## 1. 登陆/注册交互功能
    1). 一次性图形验证码: 
        通过<img src="url">请求后台获取验证码图片显示
        点击回调中更新img的src, 并携带时间戳参数, 更新验证码
    2). 发送短信验证码
        使用第三方短信平台接口
        请求发送验证码短信
        使用mint-ui实现对不同结果的不同提示效果
    3). 短信登陆/注册
    4). 密码登陆/注册
    5). 前台表单验证
        表单前台验证, 如果不通过, 提示
        发送ajax请求, 得到返回的结果
        根据结果的标识(code)来判断登陆请求是否成功
            1: 不成功, 显示提示
            0. 成功, 保存用户信息, 返回到个人中心
    6). 自动登陆
        要App初始化过程中发请求获取user信息, 并保存到state
    7). 退出登陆
        请求退出登陆的接口, 重置state中的user
        
## 2. 搭建商家整体界面
    1). 拆分界面路由: 嵌套路由
    2). 路由的定义/配置|使用

## 3. 模拟(mock)数据/接口
    1). 前后台分离的理解
        区别前后台分离的应用和前后台不分离的应用
        区别一般的HTTP请求和ajax请求
    2). json数据设计的理解
        json数据的类型: 对象/数组/字符串/数值/布尔值
        json数据的组成: 结构(名称和类型)和值
    3). mockjs的理解和使用
        用来提供mock数据接口的库
        生成随机数据, 拦截ajax请求
        
# day04
## 1. ShopHeader组件
    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          state
          mutation-types
          actions
          mutations
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据
          模板中显示
    2). 初始显示异常
        情况: Cannot read property 'xxx' of null"
          原因: 初始值是空对象, 内部没有数据, 而模块中直接显示3层表达式
          解决: 使用v-if指令
    3). vue transition动画
    
## 2. ShopGoods组件
    1). 动态展现列表数据
    2). 基本滑动:
        使用better-scroll
        创建BScroll对象的时机
          watch + $nextTick()
          自定义callback + $nextTick
        better-scroll禁用了原生的dom事件, 使用的是自定义事件
        绑定监听: scroll/scrollEnd
        滚动监听的类型: probeType
        列表滑动的2种类型
            手指触摸
            惯性/编码
    3). 滑动右侧列表, 左侧会同步更新当前分类
        1). 设计一个计算属性: currentIndex代表当前分类的下标
        2). 相关数据
          滚动的y坐标: scrollY---> 给右侧列表绑定一个滚动的监听
          右侧分类<li>的top数组: tops-->列表第一次显示之后统计
        3). 计算的逻辑
           scrollY>=top && scrollY<nextTop
    4). 点击左侧分类项, 右侧列表滑动到对应位置
        1). 绑定点击监听
        2). 通过rightScroll滚动到对应的位置
        3). 立即更新scrollY
    5). 问题: 如何保证当前分类可见?
        在currentIndex变化时, 使左侧列表滑动到对应的li

# day05
## 1. 使用禅道进行项目开发管理
    1). 搭建环境
    2). 创建部门
    3). 添加用户
    4). 设置权限
    5). 创建产品
    6). 创建项目
    7). 添加/查看需求
    8). 提交/查看/确认/解决/关闭bug

## 2. CartControl组件
    1). 问题: 更新状态数据, 对应的界面不变化
      原因: 给一个已有绑定的对象直接添加一个新的属性, 这个属性没有数据绑定
      解决: 
        Vue.set(obj, 'xxx', value)才有数据绑定
        this.$set(obj, 'xxx', value)才有数据绑定
    2). vue transition
    
## 3. ShopCart组件
    1). 将购物项列表数据定义到vuex的state中: cartFoods
    2). 在vuex的getters中定义: totalCount, totalPrice
    3). 解决几个功能性bug
        a. 删除所有购物项, 购物车列表还打开着
        b. 添加一个购物项, 购物车列表自动打开
        c. 购物车列表不能滑动
        d. 购物车列表中点一次添加, 会增加多项
        
# day06
## 1. Food组件
    1). 父子组件间调用方法:
        子组件调用父组件的方法: 通过props将方法传递给子组件
        父组件调用子组件的方法: 通过ref找到子组件标签对象
## 2. ShopRatings组件
## 3. RatingsFilter组件
    1). 使用计算属性对列表进行过滤显示
    2). 自定义过滤器计算逻辑
    3). 使用vue的自定义事件实现子组件向父组件通信
    
## 4. ShopInfo组件
    1). 通过JS动态修改元素的样式宽度
    2). 解决在当前路由路径上刷新的异常问题
        在mounted()中, 判断只有当info中有数据才创建BScroll的实例
        在info的watch中, 在$nextTick()回调中创建BScroll对象
        
## 5. 优化
    1). 缓存路由组件: <keep-alive>
    2). 路由组件懒加载: () => import('路由组件')
    3). 在线图片懒加载: vue-lazyload
    
## 6. 打包项目运行
    1). 生成打包文件中, 将所有打包文件复制到服务器应用的public下, 不再有ajax跨域请求的问题
    2). 如果路由的模式使用的history, 刷新路径时会出现404的bug
        原因: 项目根路径后的path路径会被当作后台路由路径, 会去请求对应的后台路由, 但后台没有
        解决: 使用自定义中间件去读取返回index页面展现
        
