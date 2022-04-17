import React from "react";
import { Text, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

import Styles from "./styles";

const Item = (props) => {

    return (
        <TouchableOpacity 
            style={Styles.touch} 
            onPress={() => props.pressHandler(props.item.key)}
        >
            <MaterialIcons size={18} color={'#6a5'} style={Styles.icon} name="delete" />
            <Text style={Styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    );
}

export default Item;