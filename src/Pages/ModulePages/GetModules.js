import firebase from "firebase/compat/app";

export default function getmodules(collection, title) {
  const ref = firebase
    .firestore()
    .collection(collection)
    .where("title", "==", title);

  return ref;
}
