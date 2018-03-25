// http://mockjs.com/
// https://www.cnblogs.com/cjt-cn/p/6594019.html

import Mock from 'mockjs'
import apiConfig from './config'

Mock.mockApi = function (url, type, template) {
  if (typeof (url) === "string")
    url = apiConfig.baseApiUrl + url;
  Mock.mock(url, type, template);
};

Mock.setup({
  timeout: '400-1000'
});

Mock.mockApi('member', 'get', {
  total: 100,
  'list|10': [{
    id: '@natural(1,100)',
    username: '@last',
    realName: '@cname',
    color: '@color'
  }]
});


Mock.mockApi('member/1', 'get', {
  id: '@natural(1,100)',
  username: '@last',
  realName: '@cname',
  color: '@color'
});

Mock.mockApi('task', 'get', {
  total: 100,
  'list|10': [{
    id: '@natural(1,100)',
    project: '测试项目',
    group: '默认分组',
    description: '@cparagraph',
    planTime: '@natural(1,100)',
    getDate: '@datetime',
    getMan: '@cname',
    appendDate: '@datetime',
    appendMan: '@cname',
    'level|1': ['低', '中等', '紧急'],
    'difficulty|1': ['普通', '中等', '较难']
  }]
});

Mock.mockApi('myTask', 'get', {
  total: 100,
  'list|10': [{
    id: '@natural(1,100)',
    project: '测试项目',
    group: '默认分组',
    description: '@cparagraph',
    planTime: '@natural(1,100)',
    realTime: '@natural(1,100)',
    'state|1': ['待处理', '处理中', '完成'],
    'level|1': ['低', '中等', '紧急'],
    'difficulty|1': ['普通', '中等', '较难']
  }]
});