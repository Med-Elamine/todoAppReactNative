import React from "react";
import { Text, TouchableOpacity} from "react-native";

import Styles from "./styles";

const Item = (props) => {

    return (
        <TouchableOpacity 
            style={Styles.touch} 
            onPress={() => props.pressHandler(props.item.key)}
        >
            <Text style={Styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    );
}

export default Item;