import React, {useState} from "react";
import { View, Text } from "react-native";
import { Header, List } from "@src/components";

import Styles from "./styles";

const Home = () => {

    return(
        <View style={Styles.container}>
            <Header />
            <List />
        </View>
    );
}

export default Home;