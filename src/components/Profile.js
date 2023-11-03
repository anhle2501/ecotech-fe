const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile({ className = null }) {
  return (
    <>
      <img
        className={'avatar rounded-full w-10 h-10 ' + className}
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
      />ƒ
  </>
  );
}
