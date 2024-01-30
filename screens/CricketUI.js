import {Text, StyleSheet, View} from 'react-native';
import {Padding, FontFamily, Color, FontSize} from '../GlobalStyles';
import React, {useState, useEffect} from 'react';

const CricketUI = () => {
  const updateNum = (randomAmount = []) => {
    for (let i = 0; i < 4; i++) {
      randomAmount.push((Math.random() * 4.9 + 1.0).toFixed(2));
    }
    return randomAmount;
  };

  const updateUsers = (randomUsers = []) => {
    for (let i = 0; i < 4; i++) {
      randomUsers.push(
        `${(Math.floor(Math.random() * 500000) + 100000).toLocaleString(
          'en-US',
        )}+`,
      );
    }
    return randomUsers;
  };

  const [randomAmount, setNum] = useState(updateNum([]));
  const [randomUsers, setUsers] = useState(updateUsers([]));

  useEffect(() => {
    setInterval(() => {
      setUsers(updateUsers());
    }, 4000);
    setInterval(() => {
      setNum(updateNum());
    }, 6000);
  }, []);
  return (
    <View style={styles.cricketUi}>
      <View style={[styles.teamBWrapper, styles.teamWrapperSpaceBlock]}>
        <Text style={styles.teamB}>Team B</Text>
      </View>
      <View style={[styles.teamAWrapper, styles.teamWrapperSpaceBlock]}>
        <Text style={styles.teamB}>Team A</Text>
      </View>
      <View style={[styles.matchOddsWrapper, styles.teamWrapperSpaceBlock]}>
        <Text style={[styles.matchOdds, styles.cricketTypo]}>Match Odds</Text>
      </View>
      <View style={[styles.cricketUiChild, styles.cricketPosition]} />
      <View style={[styles.scorecardWrapper, styles.scorecardWrapperFlexBox]}>
        <Text style={[styles.scorecard, styles.textTypo]}>Scorecard</Text>
      </View>
      <View
        style={[
          styles.scorecardWillBeDisplayedHeWrapper,
          styles.scorecardWrapperFlexBox,
        ]}>
        <Text style={styles.scorecardWillBe}>
          Scorecard will be displayed here
        </Text>
      </View>
      <View style={[styles.backWrapper, styles.frameViewLayout]}>
        <Text style={[styles.back, styles.backTypo]}>BACK</Text>
      </View>
      <View style={[styles.cricketUiInner, styles.frameViewPosition]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>{randomAmount[0]}</Text>
          <Text style={[styles.text1, styles.backTypo]}>{randomUsers[0]}</Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>{randomAmount[1]}</Text>
          <Text style={[styles.text1, styles.backTypo]}>{randomUsers[1]}</Text>
        </View>
      </View>
      <View style={[styles.cricketUiInner1, styles.cricketInnerSpaceBlock]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>{randomAmount[2]}</Text>
          <Text style={[styles.text1, styles.backTypo]}>{randomUsers[2]}</Text>
        </View>
      </View>
      <View style={[styles.cricketUiInner2]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>{randomAmount[3]}</Text>
          <Text style={[styles.text1, styles.backTypo]}>{randomUsers[3]}</Text>
        </View>
      </View>
      <View style={[styles.layWrapper, styles.layWrapperFlexBox]}>
        <Text style={[styles.back, styles.backTypo]}>LAY</Text>
      </View>
      <View style={[styles.cricketWrapper, styles.cricketPosition]}>
        <Text style={[styles.cricket, styles.cricketTypo]}>Cricket</Text>
      </View>
    </View>
  );
};

// const CricketUI = () => {
//   return <Text>hi</Text>;
// };
const styles = StyleSheet.create({
  cricketTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    textAlign: 'left',
  },
  cricketPosition: {
    backgroundColor: Color.primarySteelGrey,
    width: '100%',
    flex: 1,
    // height:10,
    left: 0,
    position: 'absolute',
  },
  scorecardWrapperFlexBox: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    textAlign: 'center',
  },
  frameViewLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  backTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: 'center',
    color: Color.grey,
  },
  layWrapperFlexBox: {
    flex: 1,
    left: 315,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  teamB: {
    textAlign: 'left',
    color: Color.grey,
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    fontSize: FontSize.size_base,
  },
  teamBWrapper: {
    top: 346,
    backgroundColor: Color.colorWhite,
  },
  teamAWrapper: {
    top: 297,
    backgroundColor: Color.colorWhite,
  },
  matchOdds: {
    color: Color.grey,
    fontSize: FontSize.size_base,
  },
  matchOddsWrapper: {
    top: 249,
    backgroundColor: Color.steelGrey,
  },
  cricketUiChild: {
    top: 0,
    height: 24,
  },
  scorecard: {
    flex: 1,
    textAlign: 'center',
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
  },
  scorecardWrapper: {
    top: 87,
    backgroundColor: Color.darkSteelGrey,
    paddingHorizontal: 140,
    paddingVertical: Padding.p_5xs,
  },
  scorecardWillBe: {
    fontWeight: '300',
    fontFamily: FontFamily.interLight,
    color: Color.primarySteelGrey,
    fontSize: FontSize.size_xs,
    textAlign: 'center',
  },
  scorecardWillBeDisplayedHeWrapper: {
    top: 122,
    paddingHorizontal: 89,
    paddingVertical: 55,
    backgroundColor: Color.colorWhite,
  },
  back: {
    fontSize: FontSize.size_sm,
  },
  backWrapper: {
    paddingHorizontal: 15,
    left: 215,
    flex: 1,
    top: 250,
    justifyContent: 'center',
    paddingVertical: Padding.p_sm,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Color.steelGrey,
  },
  text: {
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    color: Color.grey,
  },
  text1: {
    marginTop: 3,
    fontSize: FontSize.size_xs,
  },
  parent: {
    alignItems: 'center',
  },
  cricketUiInner: {
    paddingHorizontal: 7,
    top: 298,
    backgroundColor: Color.colorLightskyblue,
  },

  teamWrapperSpaceBlock: {
    paddingVertical: Padding.p_sm,
    width: '100%',
    left: 0,
    position: 'absolute',
    paddingHorizontal: Padding.p_base,
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameView: {
    paddingHorizontal: 18,
    top: 347,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  cricketInnerSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.colorPink,
  },
  frameViewPosition: {
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.colorLightskyblue,
    left: 203,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    position: 'absolute',
  },
  cricketUiInner1: {
    paddingHorizontal: 18,
    left: 308,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.colorPink,
    top: 298,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  cricketUiInner2: {
    paddingHorizontal: 18,
    left: 308,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.colorPink,
    top: 347,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  layWrapper: {
    paddingHorizontal: 22,
    top: 250,
    flex: 1,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.steelGrey,
  },
  cricket: {
    fontSize: 24,
    color: Color.colorWhite,
  },
  cricketWrapper: {
    top: 24,
    paddingVertical: 17,
    paddingHorizontal: Padding.p_base,
    flexDirection: 'row',
    backgroundColor: Color.primarySteelGrey,
    alignItems: 'center',
    overflow: 'hidden',
  },
  cricketUi: {
    flex: 1,
    height: 800,
    overflow: 'hidden',
    backgroundColor: Color.steelGrey,
  },
});

export default CricketUI;
