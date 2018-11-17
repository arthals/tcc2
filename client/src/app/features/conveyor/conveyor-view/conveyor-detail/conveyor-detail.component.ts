import { ConveyorResolveService } from './../../shared/conveyor-shared/conveyor.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Conveyor } from '../../shared/conveyor.model';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './conveyor-detail.component.html',
})

export class ConveyorDetailComponent implements OnInit, OnDestroy {
    public conveyor: Conveyor;
    public isLoading: boolean = true;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    constructor(private resolver: ConveyorResolveService,
        private router: Router,
        private route: ActivatedRoute) {
    }
    public ngOnInit(): void {
        this.resolver.onChanges
            .takeUntil(this.ngUnsubscribe)
            .subscribe((conveyor: Conveyor) => {
                this.isLoading = false;
                this.conveyor = Object.assign(new Conveyor(), conveyor);
            });
    }
    public ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    public redirect(): void {
        this.router.navigate(['/conveyors'], { relativeTo: this.route });
    }

    public onEdit(): void {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
}
