import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import { AsyncStorage } from "react-native"
import { StorageKey } from "./constants";

export function postponeLocalNotifications() {
  AsyncStorage.removeItem(StorageKey.NOTIFICATIONS)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
    .then(setLocalNotification);
}

export const setLocalNotification = () => { setNotification(); }
async function setNotification() {
  const data = await AsyncStorage.getItem(StorageKey.NOTIFICATIONS).then(JSON.parse);
  if (data) return;

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') return;

  Notifications.cancelAllScheduledNotificationsAsync();

  const time = new Date();
  time.setDate(time.getDate() + 1);
  time.setHours(14);
  time.setMinutes(0);
  const options = {
    time,
    repeat: 'day',
  };
  const notification = getNotification();

  Notifications.scheduleLocalNotificationAsync(notification, options);
  AsyncStorage.setItem(StorageKey.NOTIFICATIONS, JSON.stringify(true));
}

function getNotification() {
  return {
    title: 'Time to study!',
    body: "Don't forget to study your cards today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}
