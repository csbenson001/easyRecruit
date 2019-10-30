/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5db9c2cbc6ce4c4de2ba3317
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE candidateBaseService PLEASE EDIT ../candidate.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Candidate } from '../../domain/easy-recruit_db/candidate';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Candidate.service.ts
 */

/*
 * SCHEMA DB Candidate
 *
	{
		Comments: {
			type: 'String'
		},
		DOB: {
			type: 'Date'
		},
		FirstName: {
			type: 'String'
		},
		Hired: {
			type: 'Boolean'
		},
		LastName: {
			type: 'String'
		},
		MiddleName: {
			type: 'String'
		},
		Position: {
			type: 'String'
		},
		StartDate: {
			type: 'Date'
		},
		Status: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class CandidateBaseService {

    contextUrl: string = environment.endpoint + '/candidate';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * CandidateService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Candidate): Observable<Candidate> {
        return this.http
            .post<Candidate>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Candidate> {
        return this.http
            .get<Candidate>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Candidate[]> {
        return this.http
            .get<Candidate[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Candidate): Observable<Candidate> {
        return this.http
            .post<Candidate>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}