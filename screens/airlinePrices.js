import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    Alert
  } from "react-native";
export default class AirlinePrice extends Component {
    render() {
        return (
            <View>
                <Text>
                With the holiday travel season looming and the airline industry still recovering from the pandemic and a hesitant passenger base, airfares are about to increase—and there’s not much anyone can do about it.

United’s CEO on Wednesday said jet fuel prices are increasing at a rate the industry hasn’t seen for more than 18 months—and he expects to pass those costs along to passengers.

“Higher jet fuel prices lead to higher ticket prices,” Scott Kirby, CEO of United, told CNBC. “Ultimately, we’ll pass that through.”

Kirby didn’t note how big an increase the carrier could be facing.

Higher fuel costs are hardly restricted to United. Other carriers are now facing prices that are 25 cents more per gallon than in the third quarter and 37 cents per gallon higher than a year ago. While they have not announced plans to pass those costs along, it’s likely.

The increases come as more people prepare to fly for Thanksgiving and the holiday season this year. The availability of the COVID-19 vaccine and the lifting of stay-at-home orders are all the excuse some people will need to gather with loved ones.

Average domestic airfares for Thanksgiving were already expected to jump 23% from 2020’s average, with Christmas travelers facing a notable 71% jump from last year, according to travel app Hopper.

A fuel cost bump would send those even higher.

Worse news? The window to buy tickets at the lowest rates has already passed, and the current window for moderate rates is about to close. Prices, on average, go up another 40% after Halloween, with additional spikes the week of the holiday in question. 
                </Text>
            </View>
        )
    }
}
