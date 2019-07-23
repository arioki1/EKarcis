import React, {Component} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    TextInput, 
    SafeAreaView, 
    Picker, 
    ActivityIndicator 
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            province: [],
            selectedProvince: ''
        }
    }

    componentDidMount() {
        axios.get('http://52.27.82.154:7000/province')
        .then((responses) => {
            this.setState({
                province: responses.data
            })
        })
    }

    render() {
        return (
            <React.Fragment>

                <ScrollView style={{marginTop:60, paddingHorizontal:20, paddingVertical:10}}>
                    <SafeAreaView>
                        <View>
                            <TouchableOpacity style={{borderStyle:'dashed', height:200, borderWidth:1, borderRadius:5, alignItems:'center', justifyContent:'center'}}>
                                <AntDesign name='plus' size={24} />
                                <Text>Click to select image</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'#fff', marginTop:10}}>
                            <TextInput placeholder='Tour name...' style={{borderWidth:1, borderColor:'#5bf41a', padding:10, backgroundColor:'#fff', borderRadius:5}} />

                            <TextInput placeholder='Description...' style={{borderWidth:1, borderColor:'#5bf41a', padding:10, marginTop:10, height:150, borderRadius:5}} multiline={true} />
                        </View>

                        <View>
                            <Picker
                                mode={'dropdown'}
                                style={{width:200, height:50, backgroundColor:'#f1f1f1'}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({selectedProvince: itemValue})
                                }>
                                {
                                    this.state.province.map(data => (
                                        <Picker.Item value={data.id} label={data.province} key={data.id} />
                                    ))
                                }
                            </Picker>
                        </View>

                    </SafeAreaView>
                </ScrollView>

                <View style={{ backgroundColor: '#30d922', elevation: 5, position: 'absolute', top: 0, right: 0, left: 0 }}>
                    <View style={{ flex: 1, paddingVertical: 16, paddingHorizontal:20 }}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity>
                                <AntDesign name='arrowleft' size={27} color={'#fff'} />
                            </TouchableOpacity>
                            <Text style={{fontSize:20, marginLeft:10, fontFamily:'sans-serif-medium', color:'#fff'}}>Add Tour</Text>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}