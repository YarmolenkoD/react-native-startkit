import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  labelStyle: {
    position: 'absolute',
    left: 8,
    fontWeight: '300',
    color: '#fff',
  },
  textInput: {
    minWidth: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderColor: '#D9D9D9',
    borderBottomWidth: 1,
    fontSize: 20,
    color: '#ffffff',
    ...Platform.select({
      ios: {
        marginBottom: 45,
      },
      android: {
        marginBottom: 35,
      },
    }),
  },
});
