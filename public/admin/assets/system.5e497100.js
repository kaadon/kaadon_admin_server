import{r}from"./index.a2c778dd.js";function e(){return r.get({url:"/setting.system.system/info"})}function s(t){return r.get({url:"/setting.system.log/lists",params:t},{ignoreCancelToken:!0})}function o(){return r.post({url:"/setting.system.cache/clear"})}function a(t){return r.get({url:"/crontab.crontab/lists",params:t})}function c(t){return r.post({url:"/crontab.crontab/add",params:t})}function u(t){return r.get({url:"/crontab.crontab/detail",params:t})}function i(t){return r.post({url:"/crontab.crontab/edit",params:t})}function b(t){return r.post({url:"/crontab.crontab/delete",params:t})}function l(t){return r.get({url:"/crontab.crontab/expression",params:t})}export{e as a,s as b,u as c,l as d,i as e,c as f,b as g,a as h,o as s};
