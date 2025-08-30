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
      key: 'humanitarian.pem',
      user : 'ubuntu',
      host : 'humanitarian',
      ref  : 'origin/master',
      repo : 'git@github.com:IDCLofficial/ministry_of_humanitarian_affairs.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : [
        'source ~/.nvm/nvm.sh',
        'export NEXT_PUBLIC_CONTENTFUL_SPACE_ID=g08mvfhb24ji',
        'export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=yZmq2UuZ1_8XDAKpc6zdstd8XtD4vEwTc5aqK-zPU-o',
        'export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=rlJ3RsWYOuYx4jdCjveT_2w5ekUNt4e14JuCHCdRfsw',
        'export NEXT_PUBLIC_MINISTRY_ID=3AVAM45hTT76Kk9Yb5vyUh',
        'export NODE_OPTIONS="--max-old-space-size=2048"',
        'npm install',
        'npm run build',
        'pm2 reload ecosystem.config.js --env production'
      ].join(' && '),
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
