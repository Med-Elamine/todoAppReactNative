import React, {useState} from "react";
import { Text, TextInput, Button, View} from "react-native";

import Styles from "./styles";

const Form = (props) => {

    const [newTodo,setNewTodo] = useState('');

    const changeHandler = (text) => {
        setNewTodo(text);
    }

    const buttonHandler = () => {
        props.addTodo(newTodo);
        setNewTodo('');
    }


    return (
        <View style={Styles.form}>
            <TextInput
                style={Styles.input}
                onChangeText={changeHandler}
                placeholder={'Your New Todo ...'}
                value={newTodo}
            />
            <Button title="Add Todo" color='#6a5' onPress={buttonHandler}/>
        </View>
    );
}

export default Form;