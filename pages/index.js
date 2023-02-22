import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'My First Meetup',
        image: 'https://e0.pxfuel.com/wallpapers/920/264/desktop-wallpaper-stockholm-sweden-evening-embankment-capital-of-sweden-for-with-resolution-high-quality.jpg',
        address: 'Sweden',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur.',
    },
    {
        id: 'm2',
        title: 'My Second Meetup',
        image: 'https://c4.wallpaperflare.com/wallpaper/1012/242/490/pacific-ocean-5k-4k-big-sur-wallpaper-preview.jpg',
        address: 'California',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur.',
    },
    {
        id: 'm3',
        title: 'My Third Meetup',
        image: 'https://images.squarespace-cdn.com/content/v1/595d0d3eb11be1e84989368a/1626454029390-P8WVTYFL5IV1C72O3H8M/thumb_92294_cover_header-2.jpg',
        address: 'New York',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur.',
    },
]


const HomePage = () => {
    return(
        <div>
            <MeetupList meetups={DUMMY_DATA}/>
        </div>
    );

}

export default HomePage;