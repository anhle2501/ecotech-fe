const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <img
          className="avatar rounded-full w-10 h-10"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
        />
      </>
    );
  }
  