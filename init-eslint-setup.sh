#!/bin/bash
set -e

echo "Starting ESLint & Prettier setup..."

### 1. Dev Dependencies 설치 (ESLint 버전 고정으로 ERESOLVE 방지) ###
echo "Installing dev dependencies..."
npm install -D \
  eslint@^8.57.1 \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  husky \
  lint-staged \
  @commitlint/cli \
  @commitlint/config-conventional

### 2. Prettier 설정 ###
echo "Creating Prettier config..."
cat <<EOF > .prettierrc
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "all",
  "printWidth": 100
}
EOF

### 3. ESLint 설정 (Vite + React + TS 기준) ###
echo "Creating ESLint config..."
cat <<EOF > .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}
EOF

### 4. ESLint ignore ###
echo "Creating .eslintignore..."
cat <<EOF > .eslintignore
node_modules
dist
build
EOF

### 5. Commitlint 설정 ###
echo "Creating commitlint config..."
cat <<EOF > commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
EOF

### 6. lint-staged 설정 ###
echo "Configuring lint-staged..."
node <<'EOF'
const fs = require('fs')

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

pkg['lint-staged'] = {
  'src/**/*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
EOF

### 7. Husky v9 초기화 및 훅 생성 ###
echo "Setting up Husky..."
npx husky init

# pre-commit 훅 작성
cat <<'EOF' > .husky/pre-commit
npx lint-staged
EOF

# commit-msg 훅 작성
cat <<'EOF' > .husky/commit-msg
npx --no-install commitlint --edit "$1"
EOF

echo "ESLint & Prettier setup completed successfully."