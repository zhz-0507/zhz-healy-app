import Vue from 'vue'
import { Button } from 'vant'
import { Field } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Uploader } from 'vant';
import { Dialog } from 'vant';
import { Tab, Tabs } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Tab);
Vue.use(Tabs);
// 全局注册
Vue.use(Dialog);
Vue.use(Uploader);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Field);
Vue.use(Button)
