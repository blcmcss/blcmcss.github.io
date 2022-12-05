const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({
    auth: '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',
});

const owner = 'blcmcss';
const repo = 'blcmcss.github.io';
author = {
    name: 'Bradley Lambert',
    email: 'bradley.lambert@cmcss.net',
};
const url =  '/repos/{owner}/{repo}/{path}'; // leave this as is
const ref =  'heads/master'; // 'master' represents the name of my primary branch
