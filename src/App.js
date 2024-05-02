import React,{Component} from "react";
import songs from './Services/Songs';
import SongCard from './Components/SongCard'
import './App.css';
class App extends Component{
    state = {
      songs:songs
    }
    //this is sort by title function
    sortByTitle =()=>{
        this.setState({
          songs:[...this.state.songs.sort((a,b)=>{ return (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1) })]
        })      
    }
    //this is sort by ratings function
    sortByRating = ()=>{
      this.setState({
        songs:[...this.state.songs.sort((a,b)=>a.rating > b.rating ? -1 : 1)]
      })
    }
     
  render(){
    return(
        <>
        <h2 className="heading">SuperTunes-songs of the week</h2>
        <button className="str-btn" onClick={this.sortByTitle}>Sort By Title</button>
        <button className="str-btn" onClick={this.sortByRating}>Sort By Ratings</button>
         <div id="song-list">
          {this.state.songs.map(song=>(<SongCard key={song.id} data={song}/>))}
         </div>
        </>
    );
  }
}
export default App;