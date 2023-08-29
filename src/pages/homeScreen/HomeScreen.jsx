import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Search from "../../components/searchComponent/Search";
import Header from "../../components/homeComponents/header/Header";
import { useIsFocused } from "@react-navigation/native";
import Featured from "../../components/homeComponents/featured/Featured";

const HomeScreen = () => {
  //Méthode pour afficher la barre de recherche au scroll positif de l'utilisateur
  const [scroll, setScroll] = useState(null);
  const handleScroll =  e  =>  setScroll( Math.round( e.nativeEvent.contentOffset.y ) ) ;
  const isFocused = useIsFocused();

  return (
    <>
      <StatusBar barStyle={!isFocused ? "dark-content" : "light-content"} animated={true}/>
      <Search meter={65} scroll={scroll} press={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToEnd={true}
        bounces={false}
        StickyHeaderComponent={<Search />}
        onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={ 500 }>
        
        <Header />
        <Featured/>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
