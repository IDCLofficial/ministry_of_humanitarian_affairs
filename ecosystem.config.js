module.exports = {
  apps : [{
    name: 'ministry-humanitarian',
    script: 'npm start',
    instances: 1,
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }],

  deploy : {
    production : {
      key: '~/.ssh/humanitarian.pem',
      user : 'ubuntu',
      host : 'humanitarian',
      ref  : 'origin/master',
      repo : 'git@github.com:IDCLofficial/ministry_of_humanitarian_affairs.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
