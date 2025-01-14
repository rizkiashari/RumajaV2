import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomNavigator } from '../components';
import Beranda from '../pages/Beranda';
import Profil from '../pages/Profil';
import Progres from '../pages/Progres';
import Tersimpan from '../pages/Tersimpan';
import useAuthStore from '../store/authStore';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Notifikasi from '../pages/Notifikasi';
import Pengaturan from '../pages/Pengaturan';
import PilihPeran from '../pages/PilihPeran';
import PilihBidangPekerjaan from '../pages/PilihBidangPekerjaan';
import DetailBidangPekerjaan from '../pages/DetailBidangPekerjaan';
import DetailLayanan from '../pages/DetailLayanan';
import TambahLowongan from '../pages/TambahLowongan';
import FilterTersimpan from '../pages/FilterTersimpan';
import FilterHome from '../pages/FilterHome';
import DetailPencari from '../pages/DetailPencari';
import TawarkanPekerjaan from '../pages/TawarkanPekerjaan';
import KonfirmasiWaktu from '../pages/KonfirmasiWaktu';
import SuksesTawaranTerkirim from '../pages/SuksesTawaranTerkirim';
import OnBoarding from '../pages/OnBoarding';
import EditProfile from '../pages/EditProfile';
import TentangKami from '../pages/TentangKami';
import LowonganTerhapus from '../pages/LowonganTerhapus';
import LupaKataSandi from '../pages/LupaKataSandi';
import UbahKataSandi from '../pages/UbahKataSandi';
import SuksesGantiPassword from '../pages/SuksesGantiPassword';
import DetailPekerjaan from '../pages/DetailPekerjaan';
import DaftarPelamar from '../pages/DaftarPelamar';
import DaftarTawaranTerkirim from '../pages/DaftarTawaranTerkirim';
import DaftarBekerja from '../pages/DaftarBekerja';
import DaftarSelesai from '../pages/DaftarSelesai';
import DetailLowongan from '../pages/DetailLowongan';
import SuksesMelamar from '../pages/SuksesMelamar';
import EditLowongan from '../pages/EditLowongan';
import TambahPendidikan from '../pages/TambahPendidikan';
import EditPendidikan from '../pages/EditPendidikan';
import TambahPengalaman from '../pages/TambahPengalaman';
import EditPengalaman from '../pages/EditPengalaman';
import SplashScreen from '../pages/SplashScreen';
import DetailTawaranPekerjaan from '../pages/DetailTawaranPekerjaan';
import SuksesTerimaTawaran from '../pages/SuksesTerimaTawaran';
import DetailPenyedia from '../pages/DetailPenyedia';
import TolakTawaran from '../pages/TolakTawaran';
import SuksesTolakTawaran from '../pages/SuksesTolakTawaran';
import DetailLamaran from '../pages/DetailLamaran';
import SuksesBekerja from '../pages/SuksesBekerja';
import TolakLamaran from '../pages/TolakLamaran';
import SuksesTolakPelamar from '../pages/SuksesTolakPelamar';
import DetailBekerja from '../pages/DetailBekerja';
import LihatProgres from '../pages/LihatProgres';
import DetailPekerjaanSelesai from '../pages/DetailPekerjaanSelesai';
import Nilai from '../pages/Nilai';
import TerimaPelamar from '../pages/TerimaPelamar';
import TolakPelamar from '../pages/TolakPelamar';
import SuksesTerimaPelamar from '../pages/SuksesTerimaPelamar';
import DetailPelamar from '../pages/DetailPelamar';
import SuksesMengakhiriPekerjaan from '../pages/SuksesMengakhiriPekerjaan';
import DetailTawaranTerkirim from '../pages/DetailTawaranTerkirim';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigator {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen name="Beranda" component={Beranda} options={{ headerShown: false }} />
      <Tab.Screen name="Tersimpan" component={Tersimpan} options={{ headerShown: false }} />
      <Tab.Screen name="Status" component={Progres} options={{ headerShown: false }} />
      <Tab.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{
        gestureEnabled: true,
        contentStyle: { backgroundColor: '#fafafa' },
      }}
    >
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailBidangPekerjaan"
        component={DetailBidangPekerjaan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailLayanan"
        component={DetailLayanan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TambahLowongan"
        component={TambahLowongan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FilterTersimpan"
        component={FilterTersimpan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FilterHome"
        component={FilterHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailPencari"
        component={DetailPencari}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailPenyedia"
        component={DetailPenyedia}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TawarkanPekerjaan"
        component={TawarkanPekerjaan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KonfirmasiWaktu"
        component={KonfirmasiWaktu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesTawaranTerkirim"
        component={SuksesTawaranTerkirim}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesMelamar"
        component={SuksesMelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfil"
        component={EditProfile}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="TentangKami"
        component={TentangKami}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="LowonganTerhapus"
        component={LowonganTerhapus}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="UbahKataSandi"
        component={UbahKataSandi}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="SuksesGantiPassword"
        component={SuksesGantiPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailPekerjaan"
        component={DetailPekerjaan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DaftarPelamar"
        component={DaftarPelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DaftarTawaranTerkirim"
        component={DaftarTawaranTerkirim}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DaftarBekerja"
        component={DaftarBekerja}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DaftarSelesai"
        component={DaftarSelesai}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailLowongan"
        component={DetailLowongan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailLamaran"
        component={DetailLamaran}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailTawaranPekerjaan"
        component={DetailTawaranPekerjaan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailBekerja"
        component={DetailBekerja}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailPelamar"
        component={DetailPelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesMengakhiriPekerjaan"
        component={SuksesMengakhiriPekerjaan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TambahPendidikan"
        component={TambahPendidikan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TambahPengalaman"
        component={TambahPengalaman}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPengalaman"
        component={EditPengalaman}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPendidikan"
        component={EditPendidikan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditLowongan"
        component={EditLowongan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesTerimaTawaran"
        component={SuksesTerimaTawaran}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesTolakTawaran"
        component={SuksesTolakTawaran}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesBekerja"
        component={SuksesBekerja}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesTerimaPelamar"
        component={SuksesTerimaPelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuksesTolakPelamar"
        component={SuksesTolakPelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TolakTawaran"
        component={TolakTawaran}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TolakLamaran"
        component={TolakLamaran}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LihatProgres"
        component={LihatProgres}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TerimaPelamar"
        component={TerimaPelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TolakPelamar"
        component={TolakPelamar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailPekerjaanSelesai"
        component={DetailPekerjaanSelesai}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailTawaranTerkirim"
        component={DetailTawaranTerkirim}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Nilai"
        component={Nilai}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const UnAuthenticated = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        contentStyle: { backgroundColor: '#fafafa' },
      }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="PilihPeran" component={PilihPeran} options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="PilihBidangPekerjaan" component={PilihBidangPekerjaan} options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LupaKataSandi"
        component={LupaKataSandi}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const { isLogin, splashScreen } = useAuthStore();

  if (splashScreen) return <SplashScreen />;

  return isLogin ? <Authenticated /> : <UnAuthenticated />;
};

export default Router;
