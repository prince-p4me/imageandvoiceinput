import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import styles from "../utility/Style";
import ImageModal from "../components/ImageModal";
import TexttoSpeech from "../components/TexttoSpeech";
import Constants from "../utility/Constants";
import AsyncStorage from '@react-native-community/async-storage'

class HomeScreen extends React.Component {
  // const Home = ({ route, navigation }) => {
  state = {
    images: [
      {
        url: "https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png",
        feedback: null
      },
      {
        url: "https://cdn.mos.cms.futurecdn.net/yxb4cm8DUWR5GGpXS5nh8S.jpg",
        feedback: null
      },
      {
        url: "https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1620/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/08/29/03820845-b090-444f-86d1-e5259d11482f/most-heroic-pokemon.jpg.jpg",
        feedback: null
      },
    ],
    visible: false,
    speechModal: false,
    imageIndex: 0
  }

  componentDidMount = async () => {
    let data = await AsyncStorage.getItem("data");
    if (data) {
      data = JSON.parse(data);
      this.setState({ images: data });
    }
  }


  submit = feedback => {
    let { images, imageIndex } = this.state;
    let data = [...images];
    data[imageIndex].feedback = feedback;
    this.setState({
      images: data,
      speechModal: false,
      imageIndex: 0
    }, () => {
      AsyncStorage.setItem("data", JSON.stringify(images));
    });
  }

  render() {
    let { visible, images, imageIndex, speechModal } = this.state;
    return (
      <View style={styles.container}>
        <ImageModal visible={visible} data={images}
          index={imageIndex}
          close={() => this.setState({ visible: false })} />

        <TexttoSpeech visible={speechModal}
          close={() => this.setState({ speechModal: false })}
          submit={res => this.submit(res)} />

        <Header title={"Home"} />
        {
          images.map((image, index) => (
            <TouchableOpacity key={index} activeOpacity={.7}
              style={{
                width: "100%", height: 100,
                borderBottomWidth: 1,
                borderColor: "lightgray",
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 10
              }} onPress={() => {
                this.setState({
                  imageIndex: index
                }, () => this.setState({ visible: true }))
              }}>
              <Image source={{ uri: image.url }} style={{
                width: 120, height: 80,
                resizeMode: "cover"
              }}></Image>
              <View style={{ flex: 1, justifyContent: "space-around", paddingLeft: 10 }}>
                <Text style={{ fontSize: 14, color: "black" }}
                  numberOfLines={3}>{image.feedback ? image.feedback : "No feedbacks for this image"}</Text>
                <TouchableOpacity style={{
                  backgroundColor: Constants.color,
                  width: 120, height: 25, borderRadius: 12,
                  justifyContent: "center", alignItems: "center"
                }} activeOpacity={.7} onPress={() => {
                  this.setState({
                    imageIndex: index
                  }, () => this.setState({ speechModal: true }));
                }}>
                  <Text style={{ fontSize: 12, color: "white" }}
                    numberOfLines={3}>{image.feedback ? "Update " : "Add "} Feedback</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))
        }
        {/* <View style={styles.center}>
        </View> */}
      </View>
    );
  }
};

export default HomeScreen;