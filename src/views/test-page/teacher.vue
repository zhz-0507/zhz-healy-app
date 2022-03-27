<template>
    <div class="backg">
        <van-nav-bar title="心理医生">
            <template #left>
                <van-icon name="arrow-left" color="#2a2a2a" size="25"  @click="onClickLeft()"/>
            </template>
        </van-nav-bar>
        <van-tabs v-model="active" color='#5f7df5'>
            <van-tab title="全部">
                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
            <van-tab title="职场心理">
                                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
            <van-tab title="个人成长">
                                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
            <van-tab title="情绪压力">
                                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
            <van-tab title="人际关系">
                                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
            <van-tab title="家庭关系">
                                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
            <van-tab title="心理学">
                                <div class="title">
                    <span class="active">默认</span>
                    <span class="moren">评分</span>
                    <span class="moren">帮助人数</span>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Lynn</span>
                            <span class="jianjie">心理咨询师  职业规划师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">生活、职场——帮你找回内心的热情与力量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职场攻略第一步：当焦虑照进现实</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询：帮你遇到更好的自己</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">让潜意识帮你勇敢面对情绪症结</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">【首次/远程】帮你迈出情绪疏解第一步</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场心理</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>2125</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Xuyan</span>
                            <span class="jianjie">咨询公司合伙人、资深HRD</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">与迷茫的人生渐行渐远</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">言之有物，口若悬河，公众表达的秘密</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">谁的青春不迷茫？路在何方？</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">私教:伴你同行，有关未来的成长教练</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职场发展</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                深圳 帮助了 <span>896</span>  人 评分 <span>9.3</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">XiaoL</span>
                            <span class="jianjie">心理咨询师、生涯规划师、婚姻家庭治疗师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">个人成长:情绪、恋爱婚姻、原生家庭</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">家庭教育:亲子沟通、读懂孩子重建关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年咨询:抑郁、厌学、手机、人际</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">伴侣咨询:关系重建、情感挽回、外遇</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">个人成长</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">情绪压力</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>125</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">YangF</span>
                            <span class="jianjie">心理咨询师、讲师、ACE认证健身教练</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做好心理减脂，你也可以瘦身四十斤</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">心理咨询师该如何做好职业生涯规划系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">在亲密关系中走向成熟，绽放女性魅力</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">做睿智女人，经营高质量的家庭关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">青少年常见问题咨询</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">家庭关系</span>
                            </div>
                        </div>
                        <div class="end">
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                北京 帮助了 <span>29</span>  人 评分 <span>9.5</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
                <div class="main">
                    <div class="start">
                        <img src="../../assets/teacher/QQ20220327-0.jpg" alt="">
                        <div class="midle">
                            <span class="name">Shuai</span>
                            <span class="jianjie">心理咨询师</span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">职业篇:心理测评把脉职业方向</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">情感篇:改变情感等式重建亲密关系</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">睡眠篇:处理焦虑情绪改善睡眠质量</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">性格篇:假性利他与假性独立的苦痛冲突</span>
                        </div>
                        <div class="item">
                            <span class="fuhao">#</span>
                            <span class="text">首次评估:“问题”一困扰你的深入探索</span>
                        </div>
                        <div class="item">
                            <div class="biaoqian">
                                <span class="biaoqian-1">心理咨询师</span>
                            </div>
                            <div class="biaoqian">
                                <span class="biaoqian-1">职业规划</span>
                            </div>
                        </div>
                        <div class="end"> 
                            <div class="iconfont iconposition-copy"></div>
                            <div class="text">
                                上海 帮助了 <span>824</span>  人 评分 <span>9.1</span>
                            </div>
                        </div>
                    </div>             
                    <div class="bg"></div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style lang="less">
@import './teacher.less';
</style>

<script>
export default {
    name:'',
    data() {
        return {
           active: 0,     
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    }

}
</script>
  