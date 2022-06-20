import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Speech from "expo-speech";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryScreen extends Component {

  constructor(props){
    super(props)
    this.state =
    {fontLoaded:false,
     speakerColour: "grey",
      speakerIcon : volume-high-outline,
      }      
  }


async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async initiateTTS(tittle,author,story,moral)
  {
    const current_colour = this.state.speakerColour
    this.stateState({
      speakerColour : current_colour === "grey" ? "orange" : "grey"
    })
    if(current_colour === "grey"){
        Speech.speak(`${tittle}by ${author}`)
        Speech.speak(story)
        Speech.story("the moral of the story is ")
        Speech.speak(moral)
    }
    else {Speech.stop()}
  }
}