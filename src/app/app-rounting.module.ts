import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaratulaComponent } from './portada/caratula/caratula.component';
import { RoomsComponent } from './habitaciones/rooms/rooms.component';
import { RoomComponent } from './habitacion/room/room.component';
import { PlatosComponent } from './restaurante/platos/platos.component';
import { ReservasComponent } from './cliente/reservas/reservas.component';
import { CRoomComponent } from './habitaciones/c-room/c-room.component';
import { CRestauranteComponent } from './restaurante/c-restaurante/c-restaurante.component';

const routes: Routes = [
    {
        path: '',
        component: CaratulaComponent,
        pathMatch: 'full'
    },
    {
        path: 'habitaciones',
        component: RoomsComponent,
        pathMatch: 'full'
    },
    {
        path: 'habitacion',
        component: RoomComponent,
        pathMatch: 'full'
    },
    {
        path: 'restaurante',
        component: PlatosComponent,
        pathMatch: 'full'
    },
    {
        path: 'perfil',
        component: ReservasComponent,
        pathMatch: 'full'
    },
    {
        path: 'cRoom',
        component: CRoomComponent,
        pathMatch: 'full'
    },
    {
        path: 'cPlato',
        component: CRestauranteComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ""
    }
];

@NgModule({

    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{



}