import Item from "@/components/item";
import NewsItem from "@/components/newsitem";
import Title from "@/components/title";
import TypeItem from "@/components/typeitem";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Title title="HẠNG MỤC ĐÁ ỐP LÁT" />
        <div className="row">
          <div className="col small-12 large-12">
            <div className="col-inner">
              <div className="row equalize-box large-columns-4 medium-columns-3 small-columns-2 row-xsmall row-full-width">
                <div className="col">
                  <div className="col-inner">
                    <div className="badge-container absolute left top z-1" />
                    <Item title="ĐÁ LÁT NỀN" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Title title="MẪU ĐÁ HOT MỚI VỀ" />
        <div className="row">
          <div className="col small-12 large-12">
            <div className="col-inner">
              <div className="row equalize-box large-columns-4 medium-columns-3 small-columns-2 row-small has-shadow row-box-shadow-1 row-box-shadow-2-hover">
                <TypeItem title="ĐÁ GRANITE MAGMA GOLD" />
              </div>
            </div>
          </div>
        </div>
        <Title title="DỊCH VỤ NGÀNH ĐÁ" />
        <div className="row">
          <div className="col small-12 large-12">
            <div className="col-inner">
              <div className="row large-columns-4 medium-columns-1 small-columns-2 has-shadow row-box-shadow-1 row-box-shadow-2-hover">
                <NewsItem
                  title="Giới Thiệu Về Công Ty ATC stone"
                  img="https://atcstone.vn/wp-content/uploads/2021/08/MAU-DA-QUARTZ-TU-NHIEN-2-1-537x400.jpg"
                  desc="Giới Thiệu Về Công Ty Đá Hoa Cương Cao Cấp ATC stone "
                  zoom={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
