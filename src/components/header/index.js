import React from "react";
import { Text, View} from "react-native";

import Styles from "./styles";

const Header = (props) => {

    return (
        <View style={Styles.content} >
            <Text style={Styles.title} >
                MyTodo List
            </Text>
        </View>
    );
}

export default Header;