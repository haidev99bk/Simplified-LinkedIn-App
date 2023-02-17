# Environment

- node: v14.21.2
- npm: 6.14.17
- npx: 6.14.17

# How to run this app

- after clone this app, checkout the branch: dev-main
- Android: npm run android
- IOS: npm run ios
- Unit test: npm run test

# How do I optimize performance for this app ?

**1. Using FlatList and SectionList instead of ScrollView**: By using them, only visible data will be rendered.

**2. Using useCallback, useMemo and React.memo**: They are a very common method for optimization in React.js/React Native. The general idea is to avoid unnecessarily re-rendering (React.memo) or recalculating an expensive expression (useCallback, useMemo).
