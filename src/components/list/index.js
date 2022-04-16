import React, {useState} from "react";
import { Text, View, FlatList } from "react-native";
import Item from "../item";
import Form from "../form";

import Styles from "./styles";

const List = () => {

    const [todos, setTodos] = useState([]);

    const pressHandler = (key) => {
        let todosFiltered = todos.filter(item => item.key != key);
        setTodos(todosFiltered);
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos,{
                text: text,
                key: Math.random().toString(),
            }]
        })
    }

    return (
        <View style={Styles.content}>
            <Form addTodo={addTodo}/>
            <View style={Styles.list}>
                <FlatList 
                    data={todos}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => (<Item item={item} pressHandler={pressHandler}/>)}
                />
            </View>
        </View>
    );
}

export default List;