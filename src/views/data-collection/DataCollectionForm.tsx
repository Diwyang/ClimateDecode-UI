import AccomodationForm from './form/accomodation';
import EventForm from './form/event';
import FoodForm from './form/food';
import MarketingForm from './form/marketing';
import TransportForm from './form/transport';
import TravelForm from './form/travel';
import VenueForm from './form/venue';
import FormEnum from './FormEnum';

function DataCollectionForm({
  dataForm,
  next,
  prev,
}: {
  dataForm: FormEnum;
  next: () => void;
  prev: () => void;
}) {
  switch (dataForm) {
    case FormEnum.EVENT:
      return <EventForm next={next} />;
    case FormEnum.VENUE:
      return <VenueForm next={next} prev={prev} />;
    case FormEnum.FOOD:
      return <FoodForm next={next} prev={prev} />;
    case FormEnum.ACCOMODATION:
      return <AccomodationForm next={next} prev={prev} />;
    case FormEnum.TRAVEL:
      return <TravelForm next={next} prev={prev} />;
    case FormEnum.TRANSPORT:
      return <TransportForm next={next} prev={prev} />;
    case FormEnum.MATERIAL:
      return <div>No form</div>;
    case FormEnum.WASTE:
      return <div>No form</div>;
    case FormEnum.MARKETING:
      return <MarketingForm next={next} prev={prev} />;
    case FormEnum.PREPARATION:
      return <div>No form</div>;
    case FormEnum.WATER:
      return <div>No form</div>;
    case FormEnum.STREAMING:
      return <div>No form</div>;
  }
}

export default DataCollectionForm;
