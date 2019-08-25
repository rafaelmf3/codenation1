import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import AccelerationItem from "../components/AccelerationItem";

const accelerations = [
  {
    slug: "reactnative-online-1",
    name: "React Native",
    is_disabled: false,
    subscription_start_at: "2019-07-08T00:00:00-03:00",
    subscription_finish_at: "2019-07-28T23:59:59-03:00",
    start_at: "2019-08-17T00:00:00-03:00",
    finish_at: "2019-11-03T00:00:00-03:00",
    location: "Online",
    banner_url:
      "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
    home_banner_url: "",
    color_scheme: "7800FF",
    company_count: 1
  },
  {
    slug: "adxp-datascience-joinville-1",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-08-19T00:00:00-03:00",
    start_at: "2019-08-19T00:00:00-03:00",
    finish_at: "2019-10-23T23:59:59-03:00",
    location: "DevHub Joinville, SC",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "adxp-datascience-joinville-2",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-08-20T00:00:00-03:00",
    start_at: "2019-08-20T00:00:00-03:00",
    finish_at: "2019-10-24T23:59:59-03:00",
    location: "DevHub Joinville, SC",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "adxp-datascience-sp-1",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-09-23T00:00:00-03:00",
    start_at: "2019-09-23T00:00:00-03:00",
    finish_at: "2019-11-27T23:59:59-03:00",
    location: "a confirmar",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "adxp-datascience-sp-2",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-09-24T00:00:00-03:00",
    start_at: "2019-09-24T00:00:00-03:00",
    finish_at: "2019-11-28T23:59:59-03:00",
    location: "a confirmar",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "python-online-1",
    name: "Python Women",
    is_disabled: false,
    subscription_start_at: "2019-07-22T00:00:00-03:00",
    subscription_finish_at: "2019-08-11T23:59:59-03:00",
    start_at: "2019-08-24T00:00:00-03:00",
    finish_at: "2019-11-02T23:59:59-03:00",
    location: "Online",
    banner_url:
      "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
    home_banner_url: "",
    color_scheme: "212133",
    company_count: 1
  }
];

export default function Acceleration() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.acc}>Acelerações</Text>
        <FlatList
          data={accelerations}
          keyExtractor={item => item.slug}
          renderItem={({ item }) => <AccelerationItem item={item} />}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    marginLeft: 10,
    width: 290,
    height: 100
  },
  content: {
    borderTopWidth: 4,
    borderTopColor: "#7800FF",
    margin: 20
  },
  acc: {
    marginTop: 20,
    color: "#7800ff",
    fontSize: 30,
    marginBottom: 15
  }
});
