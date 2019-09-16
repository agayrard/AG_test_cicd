pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test-jenkins'
      }
    }
    stage('Publish') {
      steps {
        junit 'test-results.xml'
      }
    }

    stage('Deploy') {
      steps {
        build 'AG-deploy-nodeapp'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
  }
}

