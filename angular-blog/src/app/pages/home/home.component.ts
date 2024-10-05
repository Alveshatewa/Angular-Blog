import { Component } from '@angular/core';
import {CardComponent} from '../../components/card/card.component'
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import {FooterDetailSocialnetworkComponent} from '../../components/footer-detail-socialnetwork/footer-detail-socialnetwork.component'
import {SubscribeComponent} from '../../components/menu-subscribe/subscribe.component'
import { FooterTargetComponent } from '../../components/footer-target/footer-target.component';
import { FooterInformationComponent } from '../../components/footer-information/footer-information.component';
import {TextInformationComponent} from '../../components/menu-text-information/text-information.component'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,
          MenuBarComponent,
          FooterDetailSocialnetworkComponent, 
          SubscribeComponent, 
          FooterTargetComponent,
          FooterInformationComponent,
          TextInformationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
