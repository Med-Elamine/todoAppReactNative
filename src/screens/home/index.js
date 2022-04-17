import React, {useState} from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header, List } from "@src/components";

import Styles from "./styles";

const Home = () => {

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <Header />
                <List />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Home;