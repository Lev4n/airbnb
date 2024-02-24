import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listingData from '@/assets/data/airbnb-listings.json';
import ListingsMaps from '@/components/ListingsMap';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json'
// import ListingsBottomSheet from '@/components/ListingsBottomSheet';
import ListingsMap from '@/components/ListingsMap';

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes');
  const items = useMemo(()=> listingData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
      }}
    />
    {/* <Listings listings={items} category={category}/> */}
    <ListingsMap listings={listingsDataGeo} />
    {/* <ListingsBottomSheet listings={items} category={category} /> */}
    </View>
  );
};

export default Page;