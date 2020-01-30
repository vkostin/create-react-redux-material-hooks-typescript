import config from '../../config';

const API_EP = config.API_EP;

const isNoError = (response: any) => {
    return new Promise((resolve, reject) => {
        if (response && response.status === "ok") {
            resolve(response)
        } else {
            reject(((response || "No response object") && response.detail) || "No error details")
        }
    })
};

const request = (url: string, method: string) => (
    new Promise((resolve, reject) => {
            const init: RequestInit = {
                mode: 'cors',
                method: method,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };
            return fetch(url as RequestInfo, init).then(d => {
                if (d.status !== 200) {
                    return reject("Bad return status " + d.status)
                }
                d.json().then(result => {

                    //TODO: should check for result.status === "ok"
                    if (result.status === "error") {
                        reject(result.details)
                    } else
// console.log('adfox api got result:', result);
                        resolve(result)
                }).catch(e => {
                    // console.log('adfox api got error:', e);
                    reject(e.toString());
                });
            }).catch(err => {
                // console.log("adfox api got error", err.toString())
                reject(err.toString());
            });
        }
    ));

const get = (url: string) => request(url, 'GET');
const post = (url: string) => request(url, 'POST');

const loadCurrentCampaigns = () => (get(API_EP + '/api/adfox/report/campaign/daily'));
const loadReportSitesDaily = () => (get(API_EP + '/api/adfox/report/site/yesterday'));
const loadAdvertisers = () => (get(API_EP + '/api/adfox/advertiser'));
const loadAdvertisersBySites = (siteIds: number[]) => (get(API_EP + '/api/adfox/advertiser?site_id=' + siteIds.join(",")));
const loadCampaignsBySitesAndAdvertisers = (siteIds: number[], advertisersIds: number[]) =>loadCurrentCampaigns();
const loadSites = () => (get(API_EP + '/api/adfox/site'));
const updateCampaignImps = (campaignId: number, siteId: number, imps: number) =>
    (post(API_EP + `/api/adfox/campaign/${campaignId}/update/${siteId}/maximps/${imps}`));

export class SiteImpsRow {
    id: number;
    title: String;
    imps: number;

    constructor(id: number, name: String, imps: number) {
        this.id = id;
        this.title = name;
        this.imps = imps;
    }
}

export class Advertiser {
    id: number;
    agency: string;
    advertiser: string;

    constructor(id: number, agency: string, advertiser: string) {
        this.id = id;
        this.agency = agency;
        this.advertiser = advertiser;
    }
}

export class Campaign {
    id: number;
    title: string;
    constructor(id: number, title: string) {
        this.id=id;
        this.title=title;
    }
}

export default {
    isNoError,
    loadAdvertisers,
    loadCurrentCampaigns,
    loadReportSitesDaily,
    loadAdvertisersBySites,
    loadCampaignsBySitesAndAdvertisers,
    loadSites,
    updateCampaignImps,
};