import React from "react";
import { Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

import Styles from "./styles";

const Item = (props) => {

    return (
        <View style={Styles.touch}>
            <TouchableOpacity 
                onPress={() => props.pressHandler(props.item.key)}
            >
                <MaterialIcons size={18} color={'#6a5'} style={Styles.icon} name="delete" />
            </TouchableOpacity>
            <Text style={Styles.item}>{props.item.text}</Text>
        </View>
    );
}

export default Item;