import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  flex1: {
    flex: 1,
  },
  flex6: {
    flex: 6,
  },
  flex10: {
    flex: 10,
  },
  modal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  calendarWidth: {
    width: "95%"
  },
  calendarMargin: {
    marginHorizontal: 16,
    paddingBottom: 20
  },
  rowDirection: {
    flexDirection: "row"
  },
  centerMainAxis: {
    justifyContent: "center"
  },
  endCenterMainAxis: {
    justifyContent: "flex-end"
  },
  padding6: {
    padding: 10
  },
  paddingTop5: {
    paddingTop: 5
  },
  paddingTop10: {
    paddingTop: 10
  },
  paddingTop20: {
    paddingTop: 20
  },
  paddingRigh25: {
    paddingRight: 25
  },
  paddingRight10: {
    paddingRight: 10
  },
  margin6: {
    margin: 6
  },
  marginHorisontal20: {
    marginHorizontal: 20
  },
  marginVertical10: {
    marginVertical: 10
  },
  marginVertical5: {
    marginVertical: 5
  },
  marginVertical1: {
    marginVertical: 1.5
  },
  marginRight5: {
    marginRight: 5
  },
  marginLeftt10: {
    marginLeft: 10
  },
  marginBottom15: {
    marginBottom: 15
  },
  paddingBottom5: {
    paddingBottom: 5
  },
  infoBoxBorder: {
    backgroundColor: "#001400",
    borderRadius: 9
  },
  img: {
    borderRadius: 8
  },
  zIndexHigh: {
    zIndex: 1000
  },
  handleNoSpace: {
    flexWrap: 'wrap'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  boldText: {
    fontWeight: "bold"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundColor: {
    backgroundColor: "#001400"
  },
  scrollViewContainer: {
    overflow: "hidden",
    flexDirection: "row",
    display: "flex",
    width: "200%",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    alignContent: "stretch",
  },
  lightInfoBoxBorder: {
    paddingVertical: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },

});

export default styles;