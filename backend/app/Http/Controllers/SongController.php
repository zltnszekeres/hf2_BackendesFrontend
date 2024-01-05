<?php

namespace App\Http\Controllers;
use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function index(){
    
        
        return Song::all();
    
            }

    

    
    public function show($id)
    {
        return Song::find($id);

        
    }
    public function store(Request $request)
    {
        $song = new Song();
        $song->title = $request->title;
        $song->name = $request->name;
        $song->date = $request->date;
         
        $song->save();

        return Song::all();


    }





    
    public function update(Request $request, $id)
    {
        $song = Song::find($id);
        $song->title = $request->title;
        $song->name = $request->name;
        $song->date = $request->date;
        
        $song->save();

        return Song::all();
    }

    
    public function destroy($id)
    {
         Song::find($id)->delete();  

         return Song::all();
    }

    public function descriptor()
    {
        return [
            'id' => [
                'id' => 'id',
                'type' => 'id',
                'class' => 'form-control',
                'label' => 'id',
            ],
            'title' => [
                'id' => 'title',
                'label' => 'Cím',
                'type' => 'text',
                'placeholder' => 'Cím',
                'class' => 'form-control',
            ],

            'name' => [
                'id' => 'name',
                'label' => 'Előadó',
                'type' => 'text',
                'placeholder' => 'Előadó',
                'class' => 'form-control',
            ],
            'date' => [
                'id' => 'date',
                'label' => 'Megjelenés',
                'type' => 'date',
                'placeholder' => '2021-01-21',
                'class' => 'form-control',
            ],
        ];
    }
}

