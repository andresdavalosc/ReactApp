import React, { useState } from 'react';
import { View, Text, FlatList,TouchableOpacity} from 'react-native';
import Layout from '../components/bluetooth-list-layout';
import Empty from '../components/empty';
import Toggle from '../components/toggle';
import Subtitle from '../components/subtitle';
import Device from '../components/device';
import Button from '../components/button';
import BluetoothSerial, { on } from 'react-native-bluetooth-serial-next';
import Buttonc from '../components/button';

let txt='No Devices Found..'
let onoff=true;
let show=true;
const BluetoothList  = ({ navigation }) => { 
	const list =[]	
	const list2 =[]	
	const [lista, setLista]= useState([]);
	const[bolEnable, setBolEnable] = useState(false);
	const [shouldShow, setshouldShow] = useState(false);
	const renderEmpty = () => <Empty text ={txt} value={onoff}/>
	const renderItem = ({item}) => {
		
		return(
			<TouchableOpacity onPress={() => connect(item.id,item.name) }>
			 	<Device {...item} iconLeft={require('../icons/devices.png')} iconRight={require('../icons/bluetooth.png')} /> 
			</TouchableOpacity>		
		)
	};


	


	const connect = async(value,value2) =>{
		try{
			console.log(value, 'was pressed');
			console.log( 'bl: ', value2);
			const device = await BluetoothSerial.pairDevice(value);
			console.log(device)
			if( device  != null){
				console.log('ok')
				setLista([]);
				txt="connected to bluetooth device"
				onoff =false
				setshouldShow(!shouldShow)
			}
		}		
		 catch (error){
			console.log(error);
		}
	}
	  
	const enableBluetooth = async () => {
		try {
			setBolEnable(true);
			await BluetoothSerial.requestEnable();
			const devices = await BluetoothSerial.listUnpaired();
			await BluetoothSerial.stopScanning();
			const obj =JSON.stringify(devices)
			const na = JSON.parse(obj)
			for(let i = 0; i < na.length; i++){
				if((na[i]['name'] != null) && (list.includes(na[i]['id']) == false)){
					if(show == true){
						list.push(na[i]['id'])
						list2.push(na[i])
						console.log(na[i]['name'])	
					}																		
					console.log(show)	
				}
				
			}
			console.log(list)
			setLista(list2);
			console.log('on')
								
			
		} catch (error){
			console.log(error);
		}
	};

	const disableBluetooth = async () => {
		try {
			await BluetoothSerial.disable();
			await BluetoothSerial.stopScanning();
			setBolEnable(false);
			setLista([]);
		} catch (error){
			console.log(error);
		}
	};
	const toggleBluetooth = value => {
		if (value) {
			show =true
			txt="Searching Bluetooth devices..."
			return enableBluetooth();
		}
		setLista([]);
		onoff =true
		show =false
		txt="No Devices Found.."
		setshouldShow(false)
		disableBluetooth();
	};

	

	return(
		<Layout title='Bluetooth'>
			<Toggle value={bolEnable} onValueChange={toggleBluetooth}/>
			<Subtitle title="Devices list"/>		
			<FlatList			
			data={lista}
			ListEmptyComponent={renderEmpty}
			renderItem={renderItem}
			/>			
			{
				shouldShow ? (
					<Button value={navigation}/>
					) : null	
			}
		</Layout>
		
		
	)
}

export default BluetoothList

//TODO
//click on device
//pair device
//send data to phone
//bluetooth disable or disconnect when user stop using the app