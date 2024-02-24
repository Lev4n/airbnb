// import React, { useMemo, useRef } from 'react';
// import { View } from 'react-native';
// import { Listing } from '@/interfaces/listing';
// import BottomSheet from '@gorhom/bottom-sheet';
// import Listings from './Listings';
// import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView

// interface Props {
//   listings: Listing[];
//   category: string;
// }

// const ListingsBottomSheet = ({ listings, category }: Props) => {
//   const BottomSheetRef = useRef<BottomSheet>(null);
//   const snapPoints = useMemo(() => ['10%', '100%'], []);
  
//   return (
//     <GestureHandlerRootView>
//       <BottomSheet 
//         ref={BottomSheetRef}
//         snapPoints={snapPoints}
//       >
//         <View style={{flex: 1}}>
//           <Listings listings={listings} category={category}/>
//         </View>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// export default ListingsBottomSheet;
